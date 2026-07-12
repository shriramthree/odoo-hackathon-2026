from sqlalchemy.orm import Session
from app.models.audit import Audit


def get_logs(db:Session):
    return db.query(Audit).all()


def create_log(db:Session,log:Audit):
    db.add(log)
    db.commit()
    db.refresh(log)
    return log
