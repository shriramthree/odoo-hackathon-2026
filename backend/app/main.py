from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.init_db import init_db
from app.middleware.exception_handler import global_exception_handler

from app.api.user import router as user_router
from app.api.auth import router as auth_router
from app.api.department import router as department_router
from app.api.employee import router as employee_router
from app.api.asset_category import router as asset_category_router
from app.api.asset import router as asset_router
from app.api.allocation import router as allocation_router
from app.api.booking import router as booking_router
from app.api.maintenance import router as maintenance_router
from app.api.audit import router as audit_router
from app.api.dashboard import router as dashboard_router
from app.api.reports import router as reports_router
from app.api.vendor import router as vendor_router

app = FastAPI(
    title="AssetFlow ERP",
    version="1.0.0",
)

# Initialize Database
init_db()

# Global Exception Handler
app.add_exception_handler(
    Exception,
    global_exception_handler,
)

# -----------------------------
# CORS CONFIGURATION (FIX)
# -----------------------------
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# API ROUTES
# -----------------------------
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(department_router)
app.include_router(employee_router)
app.include_router(asset_category_router)
app.include_router(asset_router)
app.include_router(allocation_router)
app.include_router(booking_router)
app.include_router(maintenance_router)
app.include_router(audit_router)
app.include_router(dashboard_router)
app.include_router(reports_router)
app.include_router(vendor_router)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "AssetFlow ERP API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }