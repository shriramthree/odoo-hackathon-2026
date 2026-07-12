from sqlalchemy.orm import Session

from app.models.department import Department
from app.crud.department_crud import (
    get_departments,
    get_department,
    create_department,
    update_department,
    delete_department,
)


def get_all_departments(db: Session):
    return get_departments(db)


def create_new_department(db: Session, name: str, description: str | None):

    department = Department(
        name=name,
        description=description,
    )

    return create_department(db, department)


def update_existing_department(
    db: Session,
    department_id: int,
    name: str,
    description: str | None,
    is_active: bool,
):

    department = get_department(db, department_id)

    if not department:
        raise Exception("Department not found")

    department.name = name
    department.description = description
    department.is_active = is_active

    return update_department(db, department)


def delete_existing_department(db: Session, department_id: int):

    department = get_department(db, department_id)

    if not department:
        raise Exception("Department not found")

    delete_department(db, department)

    return {"message": "Department deleted"}
