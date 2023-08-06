# User

#### Method: POST

#### URL: `/user/createUser`

#### Body Example:

```json
{
  "email": "myEmail@gmail.com"
}
```

#### Response Success Example:

```json
{
  "status": true,
  "error": null,
  "data": "myEmail@gmail.com"
}
```

#### Response Error Example:

```json
{
  "status": false,
  "error": {
    "name": "SequelizeValidationError",
    "errors": [
      {
        "message": "user.email cannot be null",
        "type": "notNull Violation",
        "path": "email",
        "value": null,
        "origin": "CORE",
        "instance": {
          "email": null,
          "password": "eb88e803a4c5b4fa3ec926ea62428df6415ae601b6d5e4cf73022a8c95786a541182f2f3b356c15866d93cdbaa616283ede0e8040130d6802d6cf8e97d0c897a",
          "updatedAt": "2023-08-05T10:25:33.355Z",
          "createdAt": "2023-08-05T10:25:33.355Z"
        },
        "validatorKey": "is_null",
        "validatorName": null,
        "validatorArgs": []
      }
    ]
  },
  "data": null
}
```

# Auth

#### Method: POST

#### URL: `/auth/login`

#### Body Example:

```json
{
  "email": "myPassword@hotmail.com",
  "password": "620f20a5-baca-4d8e-99e1-9f97fc791fec"
}
```

#### Response Success Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFydGlueWVsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY5MTIzMjMyOX0.rCZhARggJkA2EtKEd6aYeV-FNYAUNupVpVKuL4LA6kg"
}
```

#### Response Error Example:

```json
{
  "error": {
    "status": true,
    "message": "usuario o contraseña incorrecta"
  }
}
```

# Pokemon

#### Method: GET

#### URL: `/pokemon/getPokemon/:pokemonName`

#### Headers Example:

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFydGlueWVsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY5MTIzNDgxMH0._BJC6XOpkzUAKsy7kkVcRNqWtn2T5x0l7asCTlbszu8"
}
```

#### Response Success Example:

```json
{
  "pokemon": {
    "level": 1,
    "name": "pikachu",
    "type": "electric",
    "currentHP": 35,
    "totalHP": 35,
    "baseAttack": 55,
    "baseDefense": 40,
    "baseSpecialAttack": 50,
    "baseSpecialDefense": 50,
    "baseSpeed": 90,
    "moves": [
      {
        "name": "mega-punch",
        "power": 80
      },
      {
        "name": "pay-day",
        "power": 40
      },
      {
        "name": "thunder-punch",
        "power": 75
      },
      {
        "name": "slam",
        "power": 80
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  }
}
```

#### Response Error Example:

```json
{
  "error": {
    "message": "Request failed with status code 404",
    "name": "AxiosError",
    "stack": "AxiosError: Request failed with status code 404\n    at settle (file:///C:/Users/marti/Documents/Pokemon-play/node_modules/axios/lib/core/settle.js:19:12)\n    at IncomingMessage.handleStreamEnd (file:///C:/Users/marti/Documents/Pokemon-play/node_modules/axios/lib/adapters/http.js:570:11)\n    at IncomingMessage.emit (node:events:538:35)\n    at endReadableNT (node:internal/streams/readable:1345:12)\n    at processTicksAndRejections (node:internal/process/task_queues:83:21)",
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": ["xhr", "http"],
      "transformRequest": [null],
      "transformResponse": [null],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {
        "Blob": null
      },
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "axios/1.4.0",
        "Accept-Encoding": "gzip, compress, deflate, br"
      },
      "baseURL": "https://pokeapi.co/api/v2/",
      "method": "get",
      "url": "/pokemon/pikachunn"
    },
    "code": "ERR_BAD_REQUEST",
    "status": 404
  }
}
```
