from sqlalchemy.orm import Session

from app.models.asset import Asset
from app.models.employee import Employee
from app.models.department import Department
from app.models.allocation import Allocation
from app.models.maintenance import Maintenance


def get_dashboard(db: Session):

    total_assets = db.query(Asset).count()

    employees = db.query(Employee).count()

    departments = db.query(Department).count()

    allocated_assets = (
        db.query(Allocation)
        .filter(
            Allocation.status == "Allocated",
            Allocation.returned_date.is_(None)
        )
        .count()
    )

    maintenance = db.query(Maintenance).count()

    available_assets = max(
        total_assets - allocated_assets,
        0
    )

    return {
        "total_assets": total_assets,
        "allocated_assets": allocated_assets,
        "employees": employees,
        "departments": departments,
        "maintenance": maintenance,
        "available_assets": available_assets,
    }