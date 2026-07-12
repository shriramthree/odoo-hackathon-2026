from sqlalchemy.orm import Session

from app.models.audit import Audit
from app.crud.audit_crud import *


def get_all_logs(db:Session):
    return get_logs(db)


def create_new_log(
    db:Session,
    asset_id:int,
    employee_id,
    action:str,
    description:str,
):

    log=Audit(
        asset_id=asset_id,
        employee_id=employee_id,
        action=action,
        description=description,
    )

    return create_log(db,log)
