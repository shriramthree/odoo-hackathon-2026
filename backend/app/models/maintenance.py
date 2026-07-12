from datetime import date
from sqlalchemy import String, Date, ForeignKey
from sqlalchemy.orm import Mapped,mapped_column,relationship

from app.database.base import Base


class Maintenance(Base):

    __tablename__="maintenance"

    id:Mapped[int]=mapped_column(primary_key=True,index=True)

    asset_id:Mapped[int]=mapped_column(
        ForeignKey("assets.id")
    )

    issue:Mapped[str]=mapped_column(
        String(255)
    )

    priority:Mapped[str]=mapped_column(
        String(30),
        default="Medium"
    )

    status:Mapped[str]=mapped_column(
        String(30),
        default="Pending"
    )

    requested_date:Mapped[date]=mapped_column(Date)

    completed_date:Mapped[date]=mapped_column(
        Date,
        nullable=True
    )

    asset=relationship("Asset")
