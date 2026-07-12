from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.allocation import (
    AllocationCreate,
    AllocationUpdate,
)

from app.services.allocation_service import (
    get_all_allocations,
    create_new_allocation,
    update_existing_allocation,
    delete_existing_allocation,
)

router = APIRouter(
    prefix="/allocations",
    tags=["Allocations"],
)


@router.get("/")
def list_allocations(
    db: Session = Depends(get_db),
):
    return get_all_allocations(db)


@router.post("/")
def create_allocation(
    request: AllocationCreate,
    db: Session = Depends(get_db),
):
    return create_new_allocation(
        db,
        request.asset_id,
        request.employee_id,
        request.allocated_date,
        request.expected_return_date,
        request.remarks,
    )


@router.put("/{allocation_id}")
def update_allocation(
    allocation_id: int,
    request: AllocationUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_allocation(
        db,
        allocation_id,
        request.model_dump(),
    )


@router.delete("/{allocation_id}")
def delete_allocation(
    allocation_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_allocation(
        db,
        allocation_id,
    )
