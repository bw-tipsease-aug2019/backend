## BACKEND

list of endpoints and structure

## ENDPOINTS
base url: https://tipsease-buildweek-backend.herokuapp.com/api

## register new user
POST request

- url endpoint: /auth/register
- {
"firstName": string,
"lastName": string,
"role": string,
"company": string,
"thumbnail": string,
"durationYears": integer,
"durationMonths": integer,
"tagline": string,
"email": string,
"password": string,
"cPassword": string,
"isServiceWorker": boolean
}

## login as user
- POST request
- url endpoint: /auth/login
- {
"email":"string",
"password":"string"
}

## get list of all users
- GET request
- url endpoint: /users

## get list of serviceworkers
- GET request
- url endpoint: /users/workers

## get list of tippers
- GET request
- url endpoint: /users/tippers

## get user by id
- GET request
- url endpoint: /users/:id

## get tips for a specific user id
- GET request
- url endpoint: /users/:id/tips

## update a user
- PUT request
- url endpoint users/:id

## delete a user
- DELETE request
- url endpoint users/id <---id number of user

## add a tip
- POST request
- url endpoint: /tips/add

- {
"tipAmount": integer,
"comment": string,
"user_id": integer  
}
