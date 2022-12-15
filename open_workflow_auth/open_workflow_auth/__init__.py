from typing import Optional
from uuid import uuid4
from structlog import get_logger
from open_workflow_auth.types.settings import OpenWorkflowAuthSettings
from settings import settings
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from open_workflow_auth.api.routes import (auth, ping, user)
from fastapi.staticfiles import StaticFiles
from open_workflow_auth.context import OpenWorkflowAuthContext

logger = get_logger(__name__)

class OpenWorkflowAuthMicroservice:
    def __init__(self):
        self.settings: OpenWorkflowAuthSettings = settings()
        self.api = FastAPI(title="Open Workflow Auth Microservice", version=self.settings.metadata.version, exception_handlers="")
 
    @property
    def context(self) -> OpenWorkflowAuthContext:
        return OpenWorkflowAuthContext(settings = self.settings, )

    def create_api(self):        
        self.api.state.settings = self.settings
        self.configure_middlewares(self.api)
        self.routes()
        self.cors(self.api)
        self.mount_directories()
        self.application_context(self.api)
        self.configure_session(self.api)
        return self.api

    def mount_directories(self):
        self.api.mount("/static", StaticFiles(directory="static"), name="static")

    def cors(self, api: FastAPI): 
        api.add_middleware(
            CORSMiddleware,
            allow_origins=self.settings.cors.allowed_origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    def routes(self):
        for router in [ping.router, auth.router, user.router]:
            self.api.include_router(router, prefix =self.settings.metadata.path )

    def configure_session(self, api: FastAPI):
        api.add_middleware(
            SessionMiddleware, secret_key=self.settings.secrets.authlib_session_secret)

    def configure_middlewares(self, api: FastAPI):
        pass

    def application_context(self, api: FastAPI):
        api.state.context = self.context
    
