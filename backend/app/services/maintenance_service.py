from sqlalchemy.orm import Session
from app.models.maintenance import Maintenance

from app.crud.maintenance_crud import *


def get_all_maintenance(db:Session):
    return get_maintenances(db)


def create_new_maintenance(
    db:Session,
    asset_id:int,
    issue:str,
    priority:str,
    requested_date,
):

    maintenance=Maintenance(
        asset_id=asset_id,
        issue=issue,
        priority=priority,
        requested_date=requested_date,
    )

    return create_maintenance(db,maintenance)


def update_existing_maintenance(
    db:Session,
    maintenance_id:int,
    data,
):

    maintenance=get_maintenance(db,maintenance_id)

    if not maintenance:
        raise Exception("Maintenance not found")

    for key,value in data.items():
        if value is not None:
            setattr(maintenance,key,value)

    return update_maintenance(db,maintenance)


def delete_existing_maintenance(
    db:Session,
    maintenance_id:int,
):

    maintenance=get_maintenance(db,maintenance_id)

    if not maintenance:
        raise Exception("Maintenance not found")

    delete_maintenance(db,maintenance)

    return {"message":"Maintenance deleted"}
