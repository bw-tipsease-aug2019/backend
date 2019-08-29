# backend

look into /auth/user return user info once logged in


/api/users/workers --returns workers - done
/api/users/tippers --returns tippers - done
gotta push other 2 updates, get by id, put - done



# ENDPOINTS
base url: https://tipsease-buildweek-backend.herokuapp.com/api

#register new user
POST request
url endpoint: /auth/register
{
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

#login as user
POST request
url endpoint: /auth/login
{
	"email":"testerJM",
	"password":"testing123"	
}

#get list of users
GET request
url endpoint: /users

#update a user
PUT request
url endpoint users/id  <---id number of user
{
	"email":"user@example.com",
	"password":"testing123",
	"isServiceWorker":false
}

#delete a user
DELETE request
url endpoint users/id  <---id number of user




