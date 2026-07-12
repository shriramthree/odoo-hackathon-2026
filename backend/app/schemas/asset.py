from pydantic import BaseModel
from typing import Optional


class AssetCreate(BaseModel):
    asset_tag: str
    name: str
    serial_number: str
    category_id: int
    department_id: int
    acquisition_cost: float
    location: Optional[str] = None
    condition: str = "Good"
    shared: bool = False


class AssetUpdate(BaseModel):
    asset_tag: Optional[str] = None
    name: Optional[str] = None
    serial_number: Optional[str] = None
    category_id: Optional[int] = None
    department_id: Optional[int] = None
    acquisition_cost: Optional[float] = None
    location: Optional[str] = None
    condition: Optional[str] = None
    status: Optional[str] = None
    shared: Optional[bool] = None


class AssetResponse(BaseModel):
    id: int
    asset_tag: str
    name: str
    serial_number: str
    category_id: int
    department_id: int
    acquisition_cost: float
    location: Optional[str]
    condition: str
    status: str
    shared: bool

    class Config:
        from_attributes = True
