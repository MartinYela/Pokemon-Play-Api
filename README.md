# Pokemon Play

The project consists of a pokemon API, where you can get pokemons and calculate attacks between them.

## Deploy in dev:

### Create bbdd image

```bash
docker run -d -p 3308:3306 --name pokemon-play --env MARIADB_USER=root --env MARIADB_PASSWORD=1234 --env MARIADB_ROOT_PASSWORD=1234 --env MARIADB_DATABASE=pokemons mariadb:latest
```

### Back up services

Go to the root folder of the project and enter the following command:

```bash
npm run dev
```

## Deploy in pro:

Upload the project to the server, and in the root folder put the following command:

```bash
docker-compose up
```

Note that you must have docker installed on the server.
