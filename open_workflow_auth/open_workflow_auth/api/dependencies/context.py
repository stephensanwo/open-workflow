from open_workflow_auth.context import OpenWorkflowAuthContext
from fastapi import Request
from typing import cast
from typing import AsyncIterator
from sqlalchemy.ext.asyncio import AsyncSession

def get_context(request: Request) -> OpenWorkflowAuthContext:
    return cast(OpenWorkflowAuthContext, request.app.state.context)


