# Docker Compose Test

Mono-repo simple avec :

- un front Vite + React ;
- un back FastAPI ;
- des Dockerfiles multi-stage ;
- un `docker-compose.yml` pour lancer les deux services ;
- une pipeline GitHub Actions qui build et push les images front/back sur Docker Hub.

## Lancer en local

```bash
docker compose up --build
```

Puis ouvrir :

- Front : http://localhost:8080
- Back : http://localhost:8000/health

## Images Docker Hub

La pipeline publie :

- `${DOCKERHUB_ID}/docker-compose-test-front`
- `${DOCKERHUB_ID}/docker-compose-test-back`

## Secrets GitHub à créer

Dans GitHub :

`Settings` > `Secrets and variables` > `Actions` > `New repository secret`

Créer :

- `DOCKERHUB_ID` : ton identifiant Docker Hub
- `DOCKERHUB_TOKEN` : ton token Docker Hub

## Tags générés

Sur un push sur `main` :

- `latest`
- `main`
- le SHA court du commit

Sur un tag Git comme `v1.0.0` :

- `v1.0.0`
- `latest`

Pour créer un tag :

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Remote GitHub

Le dépôt GitHub indiqué est :

```bash
git@github.com:julienbernard85/docker-compose-test.git
```

