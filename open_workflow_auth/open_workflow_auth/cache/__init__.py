import os
import aioredis
from pydantic import BaseModel
from open_workflow_auth.types.cache import RedisSettings

class Redis(BaseModel):
    redis_settings: RedisSettings

    @property
    def redis_client(self):
        connection = aioredis.from_url(self.redis_settings.connection_url, db=0)
        return connection



