from pydantic import BaseModel, validator
from enum import Enum

class OauthProviders(str, Enum):
    google = "google"
    notion = "notion"

class OauthSettings(BaseModel):
    type: str = ""
    client_id: str = ""
    client_secret: str = ""
    oauth_url: str = ""
    redirect_uri: str = ""

    @validator('type')
    def validate_oauth(cls, value):
        if value not in [type.value for type in OauthProviders]:
            raise ValueError("Invalid oauth provider")
        return value

class Oauth2Settings(BaseModel):
    jwt_secret_key: str = ""
    algorithm: str = ""
    access_token_expiry_minutes: int = 0


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: str
    firstname: str
    email: str

class SessionId(BaseModel):
    session_id: str