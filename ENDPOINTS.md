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
