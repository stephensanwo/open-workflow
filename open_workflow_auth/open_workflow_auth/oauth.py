from datetime import datetime, timedelta
import os
from open_workflow_auth.types.user import User
from pydantic import BaseModel
from open_workflow_auth.types.settings import OpenWorkflowAuthSettings
from passlib.context import CryptContext
from jose import JWTError, jwt
from uuid import uuid4
from open_workflow_auth.cache.interface import RedisInterface
from fastapi import Response
from open_workflow_auth.types.oauth import TokenData

class Oauth(BaseModel):
    settings: OpenWorkflowAuthSettings

    @property
    def password_context(self):
        return CryptContext(schemes=["bcrypt"], deprecated="auto")

    def get_password_hash(self, password:str):
        return self.password_context.hash(password)


    def create_access_token(self, data: TokenData, expires_delta: timedelta | None = None) -> str:
        to_encode = data.dict().copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=self.settings.oauth2_settings.access_token_expiry_minutes)

        to_encode.update({"sub": data.id})
        to_encode.update({"exp": expire})
        to_encode.update({"iat": datetime.utcnow()})
        to_encode.update({'data' : data.dict()})

        access_token = jwt.encode(to_encode, self.settings.oauth2_settings.jwt_secret_key, algorithm=self.settings.oauth2_settings.algorithm)

        return access_token

    async def new_session(self, response: Response, cache:RedisInterface, session_timeout: int ,access_token: str ) -> None:

        # Create new session id
        session_id = str(uuid4())

        # Store session id and encoded jwt in cache
        await cache.store_cache_data(cache_timeout=session_timeout, key = session_id, value = access_token)

        # Set session id as HTTPOnly Cookie
        response.set_cookie(key="session", value=session_id, expires=session_timeout, httponly=True)
        
    async def verify_user_password(self, plain_password:str, hashed_password:str) -> bool:
        return self.password_context.verify(plain_password, hashed_password)


    async def swap_session_token(self, cache:RedisInterface, session_id :str) -> str:
        token = await cache.get_cache_data(key = session_id)
        return token

    async def delete_session(self) -> None:
        """Clears and deletes the session"""
        await self.interface.delete_session(self.session_id)
        self.response.delete_cookie("session", httponly=True)



