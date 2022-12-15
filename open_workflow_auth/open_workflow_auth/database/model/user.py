from sqlmodel import SQLModel, Field
from sqlmodel import SQLModel, Field, select
from sqlalchemy.ext.asyncio import AsyncSession
from open_workflow_auth.types.user import (User, UserInDb, UserRegister, UserResponse, UserLogin)
from open_workflow_auth.types.exceptions import UserExistsError
from pydantic import BaseModel
from typing import AsyncIterator
from sqlalchemy.orm import sessionmaker
from fastapi import HTTPException



class UserModel(BaseModel):
    async_session: sessionmaker
    
    async def create_user(self, user: UserRegister) -> UserResponse:
        user = UserInDb(**user.dict(exclude={"confirm_password"}))
        async with self.async_session() as session:
            query = await session.execute(select(UserInDb).where(UserInDb.email == user.email))
            user_exists = query.scalars().first()
            if user_exists:
                raise HTTPException(status_code=400, detail="User already exists")
            else:
                session.add(user)
                await session.commit()
                await session.refresh(user)
                return UserResponse(**user.dict(exclude={"password, lastname"}))

    async def find_user(self, user: UserLogin) -> UserInDb:
        async with self.async_session() as session:
            query = await session.execute(select(UserInDb).where(UserInDb.email == user.email))
            user_exists = query.scalars().first()
            if not user_exists:
                raise HTTPException(status_code=400, detail="User does not exist")
            else:
                return UserInDb(**user_exists.dict())

    class Config:
        arbitrary_types_allowed = True
