from pydantic import BaseModel


class DepartmentCreate(BaseModel):
    name: str
    description: str | None = None


class DepartmentUpdate(BaseModel):
    name: str
    description: str | None = None
    is_active: bool = True


class DepartmentResponse(BaseModel):
    id: int
    name: str
    description: str | None = None
    is_active: bool

    class Config:
        from_attributes = True
