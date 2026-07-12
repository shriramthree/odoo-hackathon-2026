from sqlalchemy.orm import Session


class CRUDBase:

    def __init__(self, model):

        self.model = model

    def get(self, db: Session, obj_id: int):

        return (
            db.query(self.model)
            .filter(self.model.id == obj_id)
            .first()
        )

    def get_all(self, db: Session):

        return db.query(self.model).all()

    def create(self, db: Session, obj):

        db.add(obj)

        db.commit()

        db.refresh(obj)

        return obj

    def delete(self, db: Session, obj):

        db.delete(obj)

        db.commit()

        return True