from sqlalchemy.orm import Session

from app.models.user import User
from app.auth.hashing import hash_password, verify_password
from app.auth.jwt import create_access_token
from app.crud.auth_crud import (
    get_user_by_email,
    create_user,
)


def register_user(db: Session, name: str, email: str, password: str):

    if get_user_by_email(db, email):
        raise Exception("Email already registered")

    user = User(
        name=name,
        email=email,
        password=hash_password(password),
    )

    return create_user(db, user)


def login_user(db: Session, email: str, password: str):

    user = get_user_by_email(db, email)

    if not user:
        raise Exception("Invalid credentials")

    if not verify_password(password, user.password):
        raise Exception("Invalid credentials")

    token = create_access_token(
        {
            "sub": user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }