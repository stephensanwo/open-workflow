import os
from fastapi import APIRouter, Request, Depends
from sqlalchemy.ext.asyncio import AsyncSession
# from hypercompose_auth.database import get_session
from open_workflow_auth.types.user import (UserInDb, User)
from open_workflow_auth.api.dependencies import (get_context, private_route)
from open_workflow_auth.context import OpenWorkflowAuthContext
from sqlmodel import SQLModel, Field, select

router = APIRouter()
        
@router.get("/users")
async def users(request: Request, ctx: OpenWorkflowAuthContext = Depends(get_context), user: User = Depends(private_route)):

    print(user)
    pass