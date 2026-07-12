from sqlalchemy.orm import Session
from app.models.booking import Booking


def get_bookings(db: Session):
    return db.query(Booking).all()


def get_booking(db: Session, booking_id: int):
    return db.query(Booking).filter(
        Booking.id == booking_id
    ).first()


def create_booking(db: Session, booking: Booking):
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking


def update_booking(db: Session, booking: Booking):
    db.commit()
    db.refresh(booking)
    return booking


def delete_booking(db: Session, booking: Booking):
    db.delete(booking)
    db.commit()
