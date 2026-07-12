from sqlalchemy.orm import Session

from app.models.asset_category import AssetCategory

from app.crud.asset_category_crud import (
    get_categories,
    get_category,
    create_category,
    update_category,
    delete_category,
)


def get_all_categories(db: Session):
    return get_categories(db)


def create_new_category(
    db: Session,
    name: str,
    description: str | None,
):

    category = AssetCategory(
        name=name,
        description=description,
    )

    return create_category(db, category)


def update_existing_category(
    db: Session,
    category_id: int,
    name: str,
    description: str | None,
    status: str,
):

    category = get_category(db, category_id)

    if not category:
        raise Exception("Category not found")

    category.name = name
    category.description = description
    category.status = status

    return update_category(db, category)


def delete_existing_category(
    db: Session,
    category_id: int,
):

    category = get_category(db, category_id)

    if not category:
        raise Exception("Category not found")

    delete_category(db, category)

    return {"message":"Category deleted"}
