from datetime import date
from pydantic import BaseModel
from typing import Optional


class MaintenanceCreate(BaseModel):

    asset_id:int
    issue:str
    priority:str="Medium"
    requested_date:date


class MaintenanceUpdate(BaseModel):

    status:Optional[str]=None
    completed_date:Optional[date]=None


class MaintenanceResponse(BaseModel):

    id:int
    asset_id:int
    issue:str
    priority:str
    status:str
    requested_date:date
    completed_date:Optional[date]

    class Config:
        from_attributes=True
