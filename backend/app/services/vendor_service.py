from sqlalchemy.orm import Session

from app.models.vendor import Vendor

from app.crud.vendor_crud import (
    get_vendors,
    get_vendor,
    create_vendor,
    update_vendor,
    delete_vendor,
)


def get_all_vendors(db: Session):
    return get_vendors(db)


def create_new_vendor(
    db: Session,
    vendor_code: str,
    company_name: str,
    contact_person: str,
    email: str,
    phone: str,
    address: str,
):

    vendor = Vendor(
        vendor_code=vendor_code,
        company_name=company_name,
        contact_person=contact_person,
        email=email,
        phone=phone,
        address=address,
    )

    return create_vendor(db, vendor)


def update_existing_vendor(
    db: Session,
    vendor_id: int,
    data,
):

    vendor = get_vendor(db, vendor_id)

    if not vendor:
        raise Exception("Vendor not found")

    for key, value in data.items():
        if value is not None:
            setattr(vendor, key, value)

    return update_vendor(db, vendor)


def delete_existing_vendor(
    db: Session,
    vendor_id: int,
):

    vendor = get_vendor(db, vendor_id)

    if not vendor:
        raise Exception("Vendor not found")

    delete_vendor(db, vendor)

    return {"message":"Vendor deleted"}
