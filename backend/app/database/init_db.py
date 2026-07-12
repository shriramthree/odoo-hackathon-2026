from app.database.base import Base
from app.database.database import engine

from app.models.user import User
from app.models.department import Department


def init_db():
    Base.metadata.create_all(bind=engine)
