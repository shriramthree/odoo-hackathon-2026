from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.asset import (
    AssetCreate,
    AssetUpdate,
)

from app.services.asset_service import (
    get_all_assets,
    create_new_asset,
    update_existing_asset,
    delete_existing_asset,
)

router = APIRouter(
    prefix="/assets",
    tags=["Assets"],
)


@router.get("/")
def get_assets(
    db: Session = Depends(get_db),
):
    return get_all_assets(db)


@router.post("/")
def create_asset(
    request: AssetCreate,
    db: Session = Depends(get_db),
):
    return create_new_asset(
        db,
        request.asset_tag,
        request.name,
        request.serial_number,
        request.category_id,
        request.department_id,
        request.acquisition_cost,
        request.location,
        request.condition,
        request.shared,
    )


@router.put("/{asset_id}")
def update_asset(
    asset_id: int,
    request: AssetUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_asset(
        db,
        asset_id,
        request.model_dump(),
    )


@router.delete("/{asset_id}")
def delete_asset(
    asset_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_asset(
        db,
        asset_id,
    )
