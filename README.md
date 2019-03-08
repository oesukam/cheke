# Cheke

---

---

[![Build Status](https://travis-ci.org/oesukam/cheke.svg?branch=master)](https://travis-ci.org/oesukam/cheke)
[![Coverage Status](https://coveralls.io/repos/github/oesukam/cheke/badge.svg?branch=master)](https://coveralls.io/github/oesukam/cheke?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/f0f25d4e5bc5182f32a5/maintainability)](https://codeclimate.com/github/oesukam/cheke/maintainability)

## How to install

```
  yarn add cheke
  or
  npm install --save cheke
```

## How to use

#### Rules

1. Array: `array`
1. Boolean: `boolean`
1. Date: `date`
1. Email: `email`
1. Integer: `integer`
1. Maximum: `max:maximumNumber`
1. Minimum: `min:minimumNumber`
1. Number: `number`, `number|min:200`, `number|max:200`
1. Regular Expression: `regx:^[a-z]{6,}`
1. Required: `required`
1. String: `string`, `string|min:200`, `string|max:200`
1. UUID: `uuid`

#### Types of validation

- query -> `GET /validate-query?page=pageNumber`
  ```
   app.get('/validate-query', cheke({
     body: {
       username: 'required|string|min:6'
       password: 'required|string|min:6'
     }
   }),(req, res) => {
     return res.send({ message: 'Validated' });
   });
  ```
- params -> `GET /validate-params/:id`
  ```
   app.get('/validate-params/:id', cheke({
     params: {
       id: 'required|string'
     }
   }),(req, res) => {
     return res.send({ message: 'Validated' });
   });
  ```
- body -> `POST /validate-body`
  ```
   app.get('/validate-body', cheke({
     body: {
       username: 'required|string|min:6'
       password: 'required|string|min:6'
     }
   }),(req, res) => {
     return res.send({ message: 'Validated' });
   });
  ```

#### Example `GET /validate?page=4`

```
  const express = require('express');
  const cheke = require('cheke);

  const app = express();
  const { PORT = 3000 } = process.env

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.get('/validate', cheke({
    query: {
      page: 'required|number'
    }
  }),(req, res) => {
    return res.send({ message: 'Validated' });
  });

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500).json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });

  app.listen(PORT, () => console.log(`Server listen on port ${PORT}...`));

```

## Issues

Should it happen that the tool broke down on you please head to our [Issue tracker](https://github.com/oesukam/cheke/issues)

1. Search if the issue is already discussed or explained.
2. If no luck feel free to open a new issue and we will get back to you as soon as possible.
