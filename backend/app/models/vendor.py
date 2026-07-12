from sqlalchemy import String
from sqlalchemy.orm import Mapped,mapped_column

from app.database.base import Base


class Vendor(Base):

    __tablename__="vendors"

    id:Mapped[int]=mapped_column(primary_key=True,index=True)

    vendor_code:Mapped[str]=mapped_column(
        String(30),
        unique=True,
        nullable=False
    )

    company_name:Mapped[str]=mapped_column(
        String(100),
        nullable=False
    )

    contact_person:Mapped[str]=mapped_column(
        String(100)
    )

    email:Mapped[str]=mapped_column(
        String(120),
        unique=True
    )

    phone:Mapped[str]=mapped_column(
        String(20)
    )

    address:Mapped[str]=mapped_column(
        String(255)
    )

    status:Mapped[str]=mapped_column(
        String(20),
        default="Active"
    )
