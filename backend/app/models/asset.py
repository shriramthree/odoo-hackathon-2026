from sqlalchemy import (
    String,
    Float,
    ForeignKey,
    Boolean
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship
)

from app.database.base import Base


class Asset(Base):

    __tablename__ = "assets"

    id: Mapped[int] = mapped_column(primary_key=True,index=True)

    asset_tag: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False
    )

    name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    serial_number: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False
    )

    category_id: Mapped[int] = mapped_column(
        ForeignKey("asset_categories.id")
    )

    department_id: Mapped[int] = mapped_column(
        ForeignKey("departments.id")
    )

    acquisition_cost: Mapped[float] = mapped_column(
        Float,
        default=0
    )

    location: Mapped[str] = mapped_column(
        String(100),
        nullable=True
    )

    condition: Mapped[str] = mapped_column(
        String(50),
        default="Good"
    )

    status: Mapped[str] = mapped_column(
        String(30),
        default="Available"
    )

    shared: Mapped[bool] = mapped_column(
        Boolean,
        default=False
    )

    category = relationship("AssetCategory")
    department = relationship("Department")
