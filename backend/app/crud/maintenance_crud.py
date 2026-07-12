from sqlalchemy.orm import Session
from app.models.maintenance import Maintenance


def get_maintenances(db:Session):
    return db.query(Maintenance).all()


def get_maintenance(db:Session,maintenance_id:int):
    return db.query(Maintenance).filter(
        Maintenance.id==maintenance_id
    ).first()


def create_maintenance(db:Session,maintenance:Maintenance):
    db.add(maintenance)
    db.commit()
    db.refresh(maintenance)
    return maintenance


def update_maintenance(db:Session,maintenance:Maintenance):
    db.commit()
    db.refresh(maintenance)
    return maintenance


def delete_maintenance(db:Session,maintenance:Maintenance):
    db.delete(maintenance)
    db.commit()
