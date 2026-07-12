from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class BookingCreate(BaseModel):

    asset_id:int
    employee_id:int
    start_time:datetime
    end_time:datetime
    purpose:Optional[str]=None


class BookingUpdate(BaseModel):

    status:Optional[str]=None
    purpose:Optional[str]=None


class BookingResponse(BaseModel):

    id:int
    asset_id:int
    employee_id:int
    start_time:datetime
    end_time:datetime
    status:str
    purpose:Optional[str]

    class Config:
        from_attributes=True
