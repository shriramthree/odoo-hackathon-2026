from sqlalchemy.orm import Session
from app.models.vendor import Vendor


def get_vendors(db:Session):
    return db.query(Vendor).all()


def get_vendor(db:Session,vendor_id:int):
    return db.query(Vendor).filter(
        Vendor.id==vendor_id
    ).first()


def create_vendor(db:Session,vendor:Vendor):
    db.add(vendor)
    db.commit()
    db.refresh(vendor)
    return vendor


def update_vendor(db:Session,vendor:Vendor):
    db.commit()
    db.refresh(vendor)
    return vendor


def delete_vendor(db:Session,vendor:Vendor):
    db.delete(vendor)
    db.commit()
