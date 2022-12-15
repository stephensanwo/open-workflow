from pydantic import BaseModel

class Server(BaseModel):
    host: str = "0.0.0.0"
    port: int = 0
    workers: int = 0
    reload: bool = True
    ssl_keyfile: str = ""
    ssl_certificate: str = ""


class Cors(BaseModel):
    allowed_origins: list[str] = []