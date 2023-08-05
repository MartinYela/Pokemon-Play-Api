# Pokemon Play

El proyecto consiste en una API de pokemon, donde podrás obtener pokemons y calcular ataques entre ellos.

## Crear imágen de bbdd

```bash
docker run -d -p 3308:3306 --name pokemon-play --env MARIADB_USER=root --env MARIADB_PASSWORD=1234 --env MARIADB_ROOT_PASSWORD=1234 --env MARIADB_DATABASE=pokemons mariadb:latest
```
