import os
from fastapi import APIRouter, Request, Depends, HTTPException, Response
from open_workflow_auth.context import OpenWorkflowAuthContext
from open_workflow_auth.types.user import (UserRegister, UserResponse, UserInDb, UserLogin)
from open_workflow_auth.types.oauth import (SessionId, TokenData)
from open_workflow_auth.api.dependencies import get_context
from sqlalchemy.ext.asyncio import AsyncSession



router = APIRouter()

@router.post('/register', response_model = UserResponse, status_code = 200)
async def register(request: Request, response: Response , user:UserRegister ,ctx: OpenWorkflowAuthContext = Depends(get_context)) -> UserResponse:
    """
    Create user in db, password validation already exists in UserRegister Model. Unique email check already exist in UserModel
    """
    # Hash the password
    user.password = ctx.oauth.get_password_hash(user.password)

    # Create user in db
    new_user = await ctx.db.user.create_user(user)

    try:
        # Create and store JWT access token
        access_token = ctx.oauth.create_access_token(data = TokenData(**new_user.dict()))

        # Create new session
        await ctx.oauth.new_session(response, cache = ctx.cache, session_timeout =60, access_token = access_token)

    except:
        raise HTTPException(400, "Authentication Error")

    return new_user




@router.post("/login", status_code = 200)
async def login(request: Request,response: Response, user: UserLogin, ctx: OpenWorkflowAuthContext = Depends(get_context)) -> None:
    """
    Login user
    """
    # Check that user exists in db
    db_user = await ctx.db.user.find_user(user)

    # Validate password
    isValidPassword = await ctx.oauth.verify_user_password(plain_password = user.password, hashed_password= db_user.password)
    
    if not isValidPassword:
        raise HTTPException(status_code = 401, detail = "Wrong credentials provided", headers={"WWW-Authenticate": "Bearer"})

    try:
        # Create and store JWT access token
        access_token = ctx.oauth.create_access_token(data = TokenData(**db_user.dict()))

        # Create new session
        await ctx.oauth.new_session(response, cache = ctx.cache, session_timeout =60, access_token = access_token)

    except:
        raise HTTPException(400, "Authentication Error")

        

