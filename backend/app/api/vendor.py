from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.vendor import (
    VendorCreate,
    VendorUpdate,
)

from app.services.vendor_service import (
    get_all_vendors,
    create_new_vendor,
    update_existing_vendor,
    delete_existing_vendor,
)

router = APIRouter(
    prefix="/vendors",
    tags=["Vendors"],
)


@router.get("/")
def get_vendors(
    db: Session = Depends(get_db),
):
    return get_all_vendors(db)


@router.post("/")
def create_vendor(
    request: VendorCreate,
    db: Session = Depends(get_db),
):
    return create_new_vendor(
        db,
        request.vendor_code,
        request.company_name,
        request.contact_person,
        request.email,
        request.phone,
        request.address,
    )


@router.put("/{vendor_id}")
def update_vendor(
    vendor_id: int,
    request: VendorUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_vendor(
        db,
        vendor_id,
        request.model_dump(),
    )


@router.delete("/{vendor_id}")
def delete_vendor(
    vendor_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_vendor(
        db,
        vendor_id,
    )
