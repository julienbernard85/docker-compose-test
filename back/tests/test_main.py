from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health_returns_ok():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_message_returns_expected_message_and_instance():
    response = client.get("/api/message")

    assert response.status_code == 200

    data = response.json()

    assert data["message"] == "Bonjour depuis le back FastAPI"
    assert "instance" in data
    assert isinstance(data["instance"], str)
    assert len(data["instance"]) > 0