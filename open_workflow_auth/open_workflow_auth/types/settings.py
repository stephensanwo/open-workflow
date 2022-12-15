from pydantic import BaseModel, validator
from .server import (Server, Cors)
from .metadata import (Metadata, Environment, Secrets)
from .database import PostgresDB
from .oauth import (OauthSettings, OauthProviders, Oauth2Settings)
from .cache import RedisSettings

class OpenWorkflowAuthSettings(BaseModel):
    metadata: Metadata(environment = Environment.dev)
    cors: Cors 
    server: dict[str, Server]
    core_database: dict[str, PostgresDB]
    oauth_settings: dict[str, OauthSettings]
    oauth2_settings: Oauth2Settings
    secrets: Secrets
    redis_settings: RedisSettings

    @validator('oauth_settings')
    def validate_oauth(cls, value):
        for type in value.keys():
            if type not in [type.value for type in OauthProviders]:
                raise ValueError("Invalid oauth provider")
        return value
    
    @validator('server')
    def validate_server(cls, value):
        for env in value.keys():
            if env not in [env.value for env in Environment]:
                raise ValueError("Invalid environment")
        return value
    



