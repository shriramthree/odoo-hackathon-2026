from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class AuditCreate(BaseModel):

    asset_id:int
    employee_id:Optional[int]=None
    action:str
    description:str


class AuditResponse(BaseModel):

    id:int
    asset_id:int
    employee_id:Optional[int]
    action:str
    description:str
    created_at:datetime

    class Config:
        from_attributes=True
