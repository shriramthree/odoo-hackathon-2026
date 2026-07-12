from sqlalchemy.orm import Session
from app.models.allocation import Allocation


def get_allocations(db: Session):
    return db.query(Allocation).all()


def get_allocation(db: Session, allocation_id: int):
    return db.query(Allocation).filter(
        Allocation.id == allocation_id
    ).first()


def create_allocation(db: Session, allocation: Allocation):
    db.add(allocation)
    db.commit()
    db.refresh(allocation)
    return allocation


def update_allocation(db: Session, allocation: Allocation):
    db.commit()
    db.refresh(allocation)
    return allocation


def delete_allocation(db: Session, allocation: Allocation):
    db.delete(allocation)
    db.commit()
