from open_workflow_auth.database.schema.user import UserDB
import asyncio
# from open_workflow_auth.database import engine
# from open_workflow_auth.database import get_session
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlmodel import SQLModel, Field, select
from open_workflow_auth.types.user import UserInDb, User, UserRegister

user_db = UserDB()

# async_session = sessionmaker(
#     engine, class_=AsyncSession, expire_on_commit=False
# )

async def main():
    user = UserRegister(name="Stephen Sanwo", firstname="Stephen", lastname="Sanwo",
                email="stephen.sanwo@icloud.com", password="fsfsdf", confirm_password = "fsfsdf")
    print(user)

    # data = await db_session.__anext__().execute(select(UserInDb).where(UserInDb.email == user.email))
    # out = data.scalars().first()
    # print(out)
    # async with async_session() as sn:
    #     # print(sn.)
    #     data = await sn.execute(select(UserInDb).where(UserInDb.email == user.email))
    #     out = data.scalars().first()
    #     # await user_db.create_user(user, session = sn)
    #     print(out)


if __name__ == "__main__":
    asyncio.run(main())

