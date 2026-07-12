from app.database.base import Base
from app.database.database import engine

from app.models.user import User
from app.models.department import Department
from app.models.employee import Employee
from app.models.asset_category import AssetCategory
from app.models.asset import Asset
from app.models.allocation import Allocation
from app.models.booking import Booking


def init_db():
    Base.metadata.create_all(bind=engine)
