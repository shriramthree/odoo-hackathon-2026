from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.schemas.audit import *

from app.services.audit_service import *

router=APIRouter(
    prefix="/audit",
    tags=["Audit"]
)


@router.get("/")
def get_all(
    db:Session=Depends(get_db),
):
    return get_all_logs(db)


@router.post("/")
def create(
    request:AuditCreate,
    db:Session=Depends(get_db),
):
    return create_new_log(
        db,
        request.asset_id,
        request.employee_id,
        request.action,
        request.description,
    )
