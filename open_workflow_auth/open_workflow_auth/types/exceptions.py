from typing import Optional
from dataclasses import dataclass

class OpenWorkflowAuthException(Exception):
    pass

@dataclass
class UserExistsError(OpenWorkflowAuthException):
    """
    @desc: Exception raised when new user already exists.
    """
    email: str = ""
    message: Optional[str] = "User already exists"

    def __str__(self):
        return f'{self.email} -> {self.message}'
