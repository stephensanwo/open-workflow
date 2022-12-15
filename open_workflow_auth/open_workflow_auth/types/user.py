from pydantic import BaseModel, validator, root_validator, Field
from sqlmodel import SQLModel
from sqlmodel import Field
from typing import Any
import re

class User(SQLModel):
    firstname: str
    lastname: str
    email: str
    password: str

class UserInDb(User, table=True):
    __tablename__: str = "user"
    id: int = Field(default=None, primary_key=True)

class UserRegister(BaseModel):
    firstname: str = Field(..., min_length=1, max_length=256)
    lastname: str = Field(..., min_length=1, max_length=256)
    email: str = Field(..., min_length=1, max_length=256)
    password: str = Field(..., min_length=1, max_length=256)
    confirm_password: str = Field(..., min_length=1, max_length=256)

    @validator('confirm_password')
    def validate_passwords(cls, value:str, values: dict[Any]) -> dict[Any]:
        if value != values['password']:
            raise ValueError("Invalid password combination")
        return value

    @validator('email')
    def validate_email(cls, value:str,) -> str:
        regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        if re.match(regex, value):
            pass
        else:
            raise ValueError("Invalid email address")

        return value
    
class UserOutDb(BaseModel):
    id: str
    firstname: str
    email: str

class UserResponse(BaseModel):
    id: str
    firstname: str
    email: str

class UserLogin(BaseModel):
    email: str
    password: str