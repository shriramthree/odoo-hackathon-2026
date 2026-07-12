from pydantic import BaseModel


class AssetCategoryCreate(BaseModel):
    name:str
    description:str|None=None


class AssetCategoryUpdate(BaseModel):
    name:str
    description:str|None=None
    status:str


class AssetCategoryResponse(BaseModel):

    id:int
    name:str
    description:str|None=None
    status:str

    class Config:
        from_attributes=True
