from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.employee import (
    EmployeeCreate,
    EmployeeUpdate,
)

from app.services.employee_service import (
    get_all_employees,
    create_new_employee,
    update_existing_employee,
    delete_existing_employee,
)

router = APIRouter(
    prefix="/employees",
    tags=["Employees"],
)


@router.get("/")
def list_employees(
    db: Session = Depends(get_db),
):
    return get_all_employees(db)


@router.post("/")
def create_employee(
    request: EmployeeCreate,
    db: Session = Depends(get_db),
):
    return create_new_employee(
        db,
        request.employee_code,
        request.full_name,
        request.email,
        request.phone,
        request.department_id,
        request.designation,
    )


@router.put("/{employee_id}")
def update_employee(
    employee_id: int,
    request: EmployeeUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_employee(
        db,
        employee_id,
        request.employee_code,
        request.full_name,
        request.email,
        request.phone,
        request.department_id,
        request.designation,
        request.status,
    )


@router.delete("/{employee_id}")
def delete_employee(
    employee_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_employee(
        db,
        employee_id,
    )
