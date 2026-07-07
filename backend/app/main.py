from fastapi import FastAPI

app = FastAPI(
    title="Odoo Hackathon Starter",
    version="1.0.0",
    description="Starter Kit for Odoo Hackathon"
)


@app.get("/")
def home():
    return {
        "success": True,
        "message": "Odoo Hackathon Starter API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }