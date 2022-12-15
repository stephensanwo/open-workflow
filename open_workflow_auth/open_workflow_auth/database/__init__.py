from pydantic import BaseModel
from sqlalchemy.orm import sessionmaker
from .model.user import UserModel
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

class DatabaseModels(BaseModel):
    connection_url: str
    
    @property
    def async_session(self) -> sessionmaker:
        engine = create_async_engine(self.connection_url, echo=True, future=True)
        return sessionmaker(
                engine, class_=AsyncSession, expire_on_commit=False
            )

    @property
    def user(self) -> UserModel:
        return UserModel(async_session=self.async_session)


    class Config:
        arbitrary_types_allowed = True