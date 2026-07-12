from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Employee(Base):
    __tablename__ = "employees"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    employee_code: Mapped[str] = mapped_column(
        String(30),
        unique=True,
        nullable=False
    )

    full_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    email: Mapped[str] = mapped_column(
        String(120),
        unique=True,
        nullable=False
    )

    phone: Mapped[str] = mapped_column(
        String(20),
        nullable=True
    )

    department_id: Mapped[int] = mapped_column(
        ForeignKey("departments.id")
    )

    designation: Mapped[str] = mapped_column(
        String(80),
        nullable=False
    )

    status: Mapped[str] = mapped_column(
        String(20),
        default="Active"
    )

    department = relationship("Department")
