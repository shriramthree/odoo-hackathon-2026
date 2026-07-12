from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.booking import (
    BookingCreate,
    BookingUpdate,
)

from app.services.booking_service import (
    get_all_bookings,
    create_new_booking,
    update_existing_booking,
    delete_existing_booking,
)

router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"],
)


@router.get("/")
def get_bookings(db: Session = Depends(get_db)):
    return get_all_bookings(db)


@router.post("/")
def create_booking(
    request: BookingCreate,
    db: Session = Depends(get_db),
):
    return create_new_booking(
        db,
        request.asset_id,
        request.employee_id,
        request.start_time,
        request.end_time,
        request.purpose,
    )


@router.put("/{booking_id}")
def update_booking(
    booking_id: int,
    request: BookingUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_booking(
        db,
        booking_id,
        request.model_dump(),
    )


@router.delete("/{booking_id}")
def delete_booking(
    booking_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_booking(
        db,
        booking_id,
    )
