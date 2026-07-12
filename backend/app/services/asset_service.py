from sqlalchemy.orm import Session

from app.models.asset import Asset

from app.crud.asset_crud import (
    get_assets,
    get_asset,
    create_asset,
    update_asset,
    delete_asset,
)


def get_all_assets(db: Session):
    return get_assets(db)


def create_new_asset(
    db: Session,
    asset_tag: str,
    name: str,
    serial_number: str,
    category_id: int,
    department_id: int,
    acquisition_cost: float,
    location: str | None,
    condition: str,
    shared: bool,
):

    asset = Asset(
        asset_tag=asset_tag,
        name=name,
        serial_number=serial_number,
        category_id=category_id,
        department_id=department_id,
        acquisition_cost=acquisition_cost,
        location=location,
        condition=condition,
        shared=shared,
    )

    return create_asset(db, asset)


def update_existing_asset(
    db: Session,
    asset_id: int,
    data,
):

    asset = get_asset(db, asset_id)

    if not asset:
        raise Exception("Asset not found")

    for key, value in data.items():
        setattr(asset, key, value)

    return update_asset(db, asset)


def delete_existing_asset(
    db: Session,
    asset_id: int,
):

    asset = get_asset(db, asset_id)

    if not asset:
        raise Exception("Asset not found")

    delete_asset(db, asset)

    return {"message":"Asset deleted"}
