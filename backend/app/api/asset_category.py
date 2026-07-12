from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.asset_category import (
    AssetCategoryCreate,
    AssetCategoryUpdate,
)

from app.services.asset_category_service import (
    get_all_categories,
    create_new_category,
    update_existing_category,
    delete_existing_category,
)

router = APIRouter(
    prefix="/asset-categories",
    tags=["Asset Categories"],
)


@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    return get_all_categories(db)


@router.post("/")
def create_category(
    request: AssetCategoryCreate,
    db: Session = Depends(get_db),
):
    return create_new_category(
        db,
        request.name,
        request.description,
    )


@router.put("/{category_id}")
def update_category(
    category_id: int,
    request: AssetCategoryUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_category(
        db,
        category_id,
        request.name,
        request.description,
        request.status,
    )


@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_category(
        db,
        category_id,
    )
