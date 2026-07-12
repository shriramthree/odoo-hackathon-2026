from sqlalchemy.orm import Session
from app.models.asset import Asset


def get_assets(db: Session):
    return db.query(Asset).all()


def get_asset(db: Session, asset_id: int):
    return db.query(Asset).filter(
        Asset.id == asset_id
    ).first()


def create_asset(db: Session, asset: Asset):
    db.add(asset)
    db.commit()
    db.refresh(asset)
    return asset


def update_asset(db: Session, asset: Asset):
    db.commit()
    db.refresh(asset)
    return asset


def delete_asset(db: Session, asset: Asset):
    db.delete(asset)
    db.commit()
