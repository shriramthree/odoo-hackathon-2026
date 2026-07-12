from datetime import date
from pydantic import BaseModel
from typing import Optional


class AllocationCreate(BaseModel):
    asset_id: int
    employee_id: int
    allocated_date: date
    expected_return_date: date
    remarks: Optional[str] = None


class AllocationUpdate(BaseModel):
    returned_date: Optional[date] = None
    status: Optional[str] = None
    remarks: Optional[str] = None


class AllocationResponse(BaseModel):
    id: int
    asset_id: int
    employee_id: int
    allocated_date: date
    expected_return_date: date
    returned_date: Optional[date]
    status: str
    remarks: Optional[str]

    class Config:
        from_attributes = True
