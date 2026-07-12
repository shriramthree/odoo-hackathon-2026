from sqlalchemy.orm import Session

from app.models.employee import Employee

from app.crud.employee_crud import (
    get_employees,
    get_employee,
    create_employee,
    update_employee,
    delete_employee,
)


def get_all_employees(db: Session):
    return get_employees(db)


def create_new_employee(
    db: Session,
    employee_code: str,
    full_name: str,
    email: str,
    phone: str | None,
    department_id: int,
    designation: str,
):

    employee = Employee(
        employee_code=employee_code,
        full_name=full_name,
        email=email,
        phone=phone,
        department_id=department_id,
        designation=designation,
    )

    return create_employee(db, employee)


def update_existing_employee(
    db: Session,
    employee_id: int,
    employee_code: str,
    full_name: str,
    email: str,
    phone: str | None,
    department_id: int,
    designation: str,
    status: str,
):

    employee = get_employee(db, employee_id)

    if not employee:
        raise Exception("Employee not found")

    employee.employee_code = employee_code
    employee.full_name = full_name
    employee.email = email
    employee.phone = phone
    employee.department_id = department_id
    employee.designation = designation
    employee.status = status

    return update_employee(db, employee)


def delete_existing_employee(
    db: Session,
    employee_id: int,
):

    employee = get_employee(db, employee_id)

    if not employee:
        raise Exception("Employee not found")

    delete_employee(db, employee)

    return {"message": "Employee deleted"}
