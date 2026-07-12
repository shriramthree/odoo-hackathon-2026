from sqlalchemy.orm import Session
from app.models.asset_category import AssetCategory


def get_categories(db: Session):
    return db.query(AssetCategory).all()


def get_category(db: Session, category_id: int):
    return db.query(AssetCategory).filter(
        AssetCategory.id == category_id
    ).first()


def create_category(db: Session, category: AssetCategory):
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def update_category(db: Session, category: AssetCategory):
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, category: AssetCategory):
    db.delete(category)
    db.commit()
