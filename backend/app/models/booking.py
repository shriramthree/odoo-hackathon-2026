from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Booking(Base):

    __tablename__ = "bookings"

    id: Mapped[int] = mapped_column(primary_key=True,index=True)

    asset_id: Mapped[int] = mapped_column(
        ForeignKey("assets.id")
    )

    employee_id: Mapped[int] = mapped_column(
        ForeignKey("employees.id")
    )

    start_time: Mapped[datetime] = mapped_column(DateTime)

    end_time: Mapped[datetime] = mapped_column(DateTime)

    status: Mapped[str] = mapped_column(
        String(30),
        default="Upcoming"
    )

    purpose: Mapped[str] = mapped_column(
        String(255),
        nullable=True
    )

    asset=relationship("Asset")
    employee=relationship("Employee")
