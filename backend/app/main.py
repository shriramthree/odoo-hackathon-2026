from fastapi import FastAPI

from app.middleware.exception_handler import global_exception_handler

app = FastAPI(
    title="ERP Core",
    version="1.0.0"
)

app.add_exception_handler(
    Exception,
    global_exception_handler
)


@app.get("/")
async def root():

    return {
        "success": True,
        "message": "ERP Core Running"
    }


@app.get("/health")
async def health():

    return {
        "status": "healthy"
    }