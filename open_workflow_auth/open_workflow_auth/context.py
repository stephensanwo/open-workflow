from open_workflow_auth.types.settings import OpenWorkflowAuthSettings
from settings import settings
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker
from open_workflow_auth.database import DatabaseModels
from open_workflow_auth.types.metadata import Environment
from .oauth import Oauth
from open_workflow_auth.cache.interface import RedisInterface


class OpenWorkflowAuthContext(BaseModel):
    settings: OpenWorkflowAuthSettings

    @property
    def db(self) -> DatabaseModels:
        return DatabaseModels(connection_url = self.settings.core_database[Environment.dev].connection_url)

    @property
    def oauth(self) -> Oauth:
        return Oauth(settings = self.settings)

    @property
    def cache(self) -> RedisInterface:
        return RedisInterface(redis_settings=self.settings.redis_settings)


    class Config:
        arbitrary_types_allowed = True



