from sqlalchemy.orm import Session

from app.models.booking import Booking

from app.crud.booking_crud import (
    get_bookings,
    get_booking,
    create_booking,
    update_booking,
    delete_booking,
)


def get_all_bookings(db: Session):
    return get_bookings(db)


def create_new_booking(
    db: Session,
    asset_id: int,
    employee_id: int,
    start_time,
    end_time,
    purpose,
):

    booking = Booking(
        asset_id=asset_id,
        employee_id=employee_id,
        start_time=start_time,
        end_time=end_time,
        purpose=purpose,
    )

    return create_booking(db, booking)


def update_existing_booking(
    db: Session,
    booking_id: int,
    data,
):

    booking = get_booking(db, booking_id)

    if not booking:
        raise Exception("Booking not found")

    for key, value in data.items():
        if value is not None:
            setattr(booking, key, value)

    return update_booking(db, booking)


def delete_existing_booking(
    db: Session,
    booking_id: int,
):

    booking = get_booking(db, booking_id)

    if not booking:
        raise Exception("Booking not found")

    delete_booking(db, booking)

    return {"message":"Booking deleted"}
