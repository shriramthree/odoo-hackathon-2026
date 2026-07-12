from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.department import (
    DepartmentCreate,
    DepartmentUpdate,
)

from app.services.department_service import (
    get_all_departments,
    create_new_department,
    update_existing_department,
    delete_existing_department,
)

router = APIRouter(
    prefix="/departments",
    tags=["Departments"],
)


@router.get("/")
def list_departments(db: Session = Depends(get_db)):
    return get_all_departments(db)


@router.post("/")
def create_department(
    request: DepartmentCreate,
    db: Session = Depends(get_db),
):
    return create_new_department(
        db,
        request.name,
        request.description,
    )


@router.put("/{department_id}")
def update_department(
    department_id: int,
    request: DepartmentUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_department(
        db,
        department_id,
        request.name,
        request.description,
        request.is_active,
    )


@router.delete("/{department_id}")
def delete_department(
    department_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_department(
        db,
        department_id,
    )
