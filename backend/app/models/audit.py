from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped,mapped_column,relationship

from app.database.base import Base


class Audit(Base):

    __tablename__="audit_logs"

    id:Mapped[int]=mapped_column(primary_key=True,index=True)

    asset_id:Mapped[int]=mapped_column(
        ForeignKey("assets.id")
    )

    employee_id:Mapped[int]=mapped_column(
        ForeignKey("employees.id"),
        nullable=True
    )

    action:Mapped[str]=mapped_column(
        String(100)
    )

    description:Mapped[str]=mapped_column(
        String(255)
    )

    created_at:Mapped[datetime]=mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    asset=relationship("Asset")
    employee=relationship("Employee")
