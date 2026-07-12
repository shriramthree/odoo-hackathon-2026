from sqlalchemy.orm import Session

from app.models.asset import Asset
from app.models.employee import Employee
from app.models.department import Department
from app.models.allocation import Allocation
from app.models.booking import Booking
from app.models.maintenance import Maintenance
from app.models.audit import Audit


def get_reports(db: Session):

    return {
        "assets": db.query(Asset).count(),
        "employees": db.query(Employee).count(),
        "departments": db.query(Department).count(),
        "allocations": db.query(Allocation).count(),
        "bookings": db.query(Booking).count(),
        "maintenance": db.query(Maintenance).count(),
        "audit_logs": db.query(Audit).count(),
    }
