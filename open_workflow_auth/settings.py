import yaml
import os
from open_workflow_auth.types.settings import OpenWorkflowAuthSettings
from dotenv import load_dotenv

load_dotenv()

def settings():
    path = os.environ.get("OPEN_WORKFLOW_AUTH_SETTINGS_PATH")
    with open(path, "r", encoding="utf-8") as f:
        config = yaml.safe_load(f)

    return OpenWorkflowAuthSettings.parse_obj(config)
