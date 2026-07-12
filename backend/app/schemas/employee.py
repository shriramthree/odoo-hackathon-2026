from pydantic import BaseModel, EmailStr


class EmployeeCreate(BaseModel):
    employee_code: str
    full_name: str
    email: EmailStr
    phone: str | None = None
    department_id: int
    designation: str


class EmployeeUpdate(EmployeeCreate):
    status: str


class EmployeeResponse(BaseModel):
    id: int
    employee_code: str
    full_name: str
    email: EmailStr
    phone: str | None
    department_id: int
    designation: str
    status: str

    class Config:
        from_attributes = True
