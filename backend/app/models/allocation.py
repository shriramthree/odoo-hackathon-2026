from datetime import date
from sqlalchemy import ForeignKey, Date, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Allocation(Base):
    __tablename__ = "allocations"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    asset_id: Mapped[int] = mapped_column(
        ForeignKey("assets.id")
    )

    employee_id: Mapped[int] = mapped_column(
        ForeignKey("employees.id")
    )

    allocated_date: Mapped[date] = mapped_column(
        Date
    )

    expected_return_date: Mapped[date] = mapped_column(
        Date
    )

    returned_date: Mapped[date] = mapped_column(
        Date,
        nullable=True
    )

    status: Mapped[str] = mapped_column(
        String(30),
        default="Allocated"
    )

    remarks: Mapped[str] = mapped_column(
        String(255),
        nullable=True
    )

    asset = relationship("Asset")
    employee = relationship("Employee")
