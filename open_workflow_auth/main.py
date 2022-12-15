import uvicorn
import multiprocessing
from open_workflow_auth.types.server import Server
from open_workflow_auth.types.metadata import Environment
from open_workflow_auth import OpenWorkflowAuthMicroservice



def number_of_workers():
    print((multiprocessing.cpu_count() * 2) + 1)
    return (multiprocessing.cpu_count() * 2) + 1


service: OpenWorkflowAuthMicroservice = OpenWorkflowAuthMicroservice()
print(service.settings)

api = service.create_api()

if __name__ == "__main__":
    if service.settings.metadata.environment == Environment.dev :
        server: Server = service.settings.server[Environment.dev]
        uvicorn.run("main:api", host=server.host,
                    port=server.port, reload=server.reload, workers=server.workers, ssl_keyfile=server.ssl_keyfile, ssl_certfile=server.ssl_certificate)


