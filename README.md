# AdMarket
A market for Youtuber and Ads

## Route

### Path
`http://localhost:8000/api`

#### /login [POST]

  ##### Body
  ```
  {
    "password":  "admarket",
    "email": "louis1998@live.fr"
  }
  ```

  ##### Response 200

  ```
  {
    "token": "secret"
  }
  ```

#### /user [GET]

  Return authentified User

  ##### Header

  ```
  {
    "Authorization": "bearer secret"
  }
  ```

  ##### Response
  ```
  {
      "user": {
          "id": 1,
          "name": "test",
          "email": "louis1998@live.fr",
          "email_verified_at": null,
          "created_at": "2018-12-18 14:59:54",
          "updated_at": "2018-12-19 11:05:27"
      }
  }
  ```
  #### /register [POST]

  Register a new user

  ##### Body

  ```
  {
    "email": "exemple@test.fr",
    "name": "Louis Castel",
    "password": "secrect",
    "password_confirmation": "secret"
  }
  ```

  ##### Response
  ```
{
    "user": {
        "name": "Louis Castel",
        "email": "exemple@test.fr",
        "updated_at": "2018-12-19 16:06:10",
        "created_at": "2018-12-19 16:06:10",
        "id": 2
    },
    "token": "secret"
}
  ```
  #### /update [POST]

  Update user datas

  ##### Header

  ```
  {
    "Authorization": "bearer secret"
  }
  ```

  ##### Body

  ```
  {
    "email": "exemple2@test.fr", //optional
    "name": "Louis Castel", //optional
  }
  ```

  ##### Response
  ```
{
    "user": {
        "name": "Louis Castel",
        "email": "exemple2@test.fr",
        "updated_at": "2018-12-19 16:06:10",
        "created_at": "2018-12-19 16:06:10",
        "id": 2
    }
}
  ```
