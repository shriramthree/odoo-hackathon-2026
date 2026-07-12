from sqlalchemy.orm import Session

from app.models.allocation import Allocation

from app.crud.allocation_crud import (
    get_allocations,
    get_allocation,
    create_allocation,
    update_allocation,
    delete_allocation,
)


def get_all_allocations(db: Session):
    return get_allocations(db)


def create_new_allocation(
    db: Session,
    asset_id: int,
    employee_id: int,
    allocated_date,
    expected_return_date,
    remarks,
):

    allocation = Allocation(
        asset_id=asset_id,
        employee_id=employee_id,
        allocated_date=allocated_date,
        expected_return_date=expected_return_date,
        remarks=remarks,
    )

    return create_allocation(db, allocation)


def update_existing_allocation(
    db: Session,
    allocation_id: int,
    data,
):

    allocation = get_allocation(db, allocation_id)

    if not allocation:
        raise Exception("Allocation not found")

    for key, value in data.items():
        if value is not None:
            setattr(allocation, key, value)

    return update_allocation(db, allocation)


def delete_existing_allocation(
    db: Session,
    allocation_id: int,
):

    allocation = get_allocation(db, allocation_id)

    if not allocation:
        raise Exception("Allocation not found")

    delete_allocation(db, allocation)

    return {"message": "Allocation deleted"}
