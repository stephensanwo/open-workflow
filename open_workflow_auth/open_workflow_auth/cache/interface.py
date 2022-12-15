import json
from . import Redis
from datetime import timedelta

class RedisInterface(Redis):
    async def store_cache_data(self, cache_timeout:int, key: str, value: dict | list) -> bool:
        try:
            await self.redis_client.set(key, json.dumps(value), ex=timedelta(days=cache_timeout)
                )
            return True
        except:
            return False
    
    async def get_cache_data(self, key: str) -> dict | list:
        try:
            data = await self.redis_client.get(key)
            return json.loads(data)
            
        except:
            return []