from fastapi import  HTTPException, Request, Cookie
from jose import JWTError, jwt, ExpiredSignatureError
from fastapi import Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from open_workflow_auth.context import OpenWorkflowAuthContext
from open_workflow_auth.types.oauth import TokenData
from open_workflow_auth.types.user import User
from typing import Optional


security = HTTPBearer()

async def private_route(request: Request, authorization: HTTPAuthorizationCredentials = Security(security)) -> None:
    ctx: OpenWorkflowAuthContext = request.app.state.context
    session_id = authorization.credentials.strip()
    token = await ctx.oauth.swap_session_token(cache = ctx.cache, session_id =session_id)

    credentials_exception = HTTPException(
            status_code=401,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not token:
        raise credentials_exception    

    try:
        try:
            payload = jwt.decode(token = token, key = ctx.settings.oauth2_settings.jwt_secret_key, algorithms=ctx.settings.oauth2_settings.algorithm)

        except ExpiredSignatureError:
            raise HTTPException(
                status_code=401,
                detail="Expired credentials",
                headers={"WWW-Authenticate": "Bearer"},
        )

        auth_user: TokenData = payload.get("data")
        print(auth_user)

        if auth_user is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

        
    return auth_user


