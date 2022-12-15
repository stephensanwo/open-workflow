from pydantic import BaseModel, validator
from enum import Enum

class Environment(str, Enum):
    dev = "dev"
    prod = "prod"

class Metadata(BaseModel):
    environment: str
    version: str = ""
    path: str = ""
    name: str = ""
    domain: str = ""
    website: str = ""

    @validator('environment')
    def validate_env(cls, value):
        if value not in [env.value for env in Environment]:
            raise ValueError("Invalid environment")
        return value


class Secrets(BaseModel):
    authlib_session_secret: str
