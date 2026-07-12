from sqlalchemy.orm import Session

from app.models.asset import Asset
from app.models.employee import Employee
from app.models.department import Department
from app.models.allocation import Allocation
from app.models.maintenance import Maintenance


def get_dashboard(db: Session):

    return {
        "total_assets": db.query(Asset).count(),
        "total_employees": db.query(Employee).count(),
        "total_departments": db.query(Department).count(),
        "allocated_assets": db.query(Allocation).count(),
        "maintenance_requests": db.query(Maintenance).count(),
    }
