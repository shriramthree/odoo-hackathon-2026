from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.report_service import get_reports

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.get("/")
def reports(
    db: Session = Depends(get_db),
):
    return get_reports(db)
