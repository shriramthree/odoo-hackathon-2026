from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.maintenance import *

from app.services.maintenance_service import *

router=APIRouter(
    prefix="/maintenance",
    tags=["Maintenance"]
)


@router.get("/")
def get_all(db:Session=Depends(get_db)):
    return get_all_maintenance(db)


@router.post("/")
def create(
    request:MaintenanceCreate,
    db:Session=Depends(get_db),
):
    return create_new_maintenance(
        db,
        request.asset_id,
        request.issue,
        request.priority,
        request.requested_date,
    )


@router.put("/{maintenance_id}")
def update(
    maintenance_id:int,
    request:MaintenanceUpdate,
    db:Session=Depends(get_db),
):
    return update_existing_maintenance(
        db,
        maintenance_id,
        request.model_dump(),
    )


@router.delete("/{maintenance_id}")
def delete(
    maintenance_id:int,
    db:Session=Depends(get_db),
):
    return delete_existing_maintenance(
        db,
        maintenance_id,
    )
