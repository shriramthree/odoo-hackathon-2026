from pydantic import BaseModel,EmailStr
from typing import Optional


class VendorCreate(BaseModel):

    vendor_code:str
    company_name:str
    contact_person:str
    email:EmailStr
    phone:str
    address:str


class VendorUpdate(BaseModel):

    vendor_code:Optional[str]=None
    company_name:Optional[str]=None
    contact_person:Optional[str]=None
    email:Optional[EmailStr]=None
    phone:Optional[str]=None
    address:Optional[str]=None
    status:Optional[str]=None


class VendorResponse(BaseModel):

    id:int
    vendor_code:str
    company_name:str
    contact_person:str
    email:EmailStr
    phone:str
    address:str
    status:str

    class Config:
        from_attributes=True
