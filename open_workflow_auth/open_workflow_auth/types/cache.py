from pydantic import BaseModel


class RedisSettings(BaseModel):
    password: str = ""
    user: str = ""
    host: str = ""
    port: str = ""

    @property
    def connection_url(self):
        return f"redis://{self.user}:{self.password}@{self.host}:{self.port}"

