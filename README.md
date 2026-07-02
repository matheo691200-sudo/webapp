# webapp — Pipeline DevSecOps (Cloud)

Migration cloud de la chaîne DevSecOps du TP1 (GitLab + SonarQube locaux)
vers **GitHub Actions + SonarQube Cloud + Trivy**, en services 100 % gratuits.

## Pipeline (`.github/workflows/ci.yml`)

| Job | Rôle |
|-----|------|
| `unit-test` | Tests Jest + couverture (lcov) |
| `sonar-check` | Analyse SonarQube Cloud (SAST) + Quality Gate « Sonar way » |
| `dependency-scan` | Trivy — scan des dépendances (HIGH/CRITICAL) |
| `build-image` | Construction de l'image Docker |
| `container-scan` | Trivy — scan de l'image (CRITICAL) |

## Configuration requise

- Dépôt **public** (minutes Actions illimitées + analyse Sonar gratuite).
- Secret GitHub `SONAR_TOKEN` (Settings > Secrets and variables > Actions).
- `sonar-project.properties` : renseigner `sonar.organization` et `sonar.projectKey`
  fournis par SonarQube Cloud.
