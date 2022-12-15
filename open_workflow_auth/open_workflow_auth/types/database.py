from pydantic import BaseModel
from .metadata import Environment



class PostgresDB(BaseModel):
    environment: Environment = Environment.dev
    driver: str = ""
    username: str = ""
    password: str = ""
    url: str = ""
    port: str = ""
    database: str = ""

    @property
    def connection_url(self):
        return f"{self.driver}://{self.username}:{self.password}@{self.url}:{self.port}/{self.database}"

