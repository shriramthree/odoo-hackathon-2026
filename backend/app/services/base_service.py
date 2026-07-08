from sqlalchemy.orm import Session

from app.crud.crud_base import CRUDBase


class BaseService:

    def __init__(self, model):

        self.crud = CRUDBase(model)

    def get(self, db: Session, obj_id: int):

        return self.crud.get(db, obj_id)

    def get_all(self, db: Session):

        return self.crud.get_all(db)

    def create(self, db: Session, obj):

        return self.crud.create(db, obj)

    def delete(self, db: Session, obj):

        return self.crud.delete(db, obj)