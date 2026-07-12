from fastapi import FastAPI

from app.database.init_db import init_db
from app.middleware.exception_handler import global_exception_handler

from app.api.user import router as user_router
from app.api.auth import router as auth_router
from app.api.department import router as department_router

app = FastAPI(
    title="AssetFlow ERP",
    version="1.0.0",
)

init_db()

app.add_exception_handler(
    Exception,
    global_exception_handler,
)

app.include_router(user_router)
app.include_router(auth_router)
app.include_router(department_router)


@app.get("/")
def root():
    return {
        "message": "AssetFlow API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
