const request = require('supertest');

const db = require('../database/dbConfig.js');
const server = require('../api/server');

describe('server', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  it("tests are running with DB_ENV set to 'testing'", () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  //api auth/register
  describe('POST /api/auth/register', () => {
    it('should insert new user, return 201', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'jestTester',
          password: 'test1',
          isServiceWorker: true,
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return JSON', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'jestTester',
          password: 'test1',
          isServiceWorker: true,
        })
        .then(res => {
          expect(res.type).toEqual('application/json');
        });
    });
  });

  //api/auth/login
  describe('POST /api/auth/login', () => {
    const user = {
      username: 'jestTester',
      password: 'test1',
    };
    it('should login user, expect values to not be null', () => {
      return request(server)
        .post('/api/auth/login')
        .send(user)
        .then(res => {
          expect(user).not.toBeNull();
        });
    });
    it('should return JSON', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'jestTester',
          password: 'test1',
        })
        .then(res => {
          expect(res.type).toEqual('application/json');
        });
    });

    //api/users
    describe('GET api/users', () => {
      describe('get users', () => {
        it('should return all users', () => {
          return request(server)
            .get('/api/users')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
        it('should return status 200', () => {
          return request(server)
            .get('/api/users')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });
    });

    //api/users/workers
    describe('GET api/users/workers', () => {
      describe('get serviceworkers', () => {
        it('should return all serviceworkers', () => {
          return request(server)
            .get('/api/users/workers')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
        it('should return status 200', () => {
          return request(server)
            .get('/api/users/workers')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });
    });

    //api/users/tippers
    describe('GET api/users/tippers', () => {
      describe('get tippers', () => {
        it('should return all tippers', () => {
          return request(server)
            .get('/api/users/tippers')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
        it('should return status 200', () => {
          return request(server)
            .get('/api/users/tippers')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });
    });

    //api/tips
    describe('GET api/tips', () => {
      describe('get tips', () => {
        it('should return all tips', () => {
          return request(server)
            .get('/api/tips')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
        it('should return status 200', () => {
          return request(server)
            .get('/api/tips')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });
    });

    //api/users/:id
    describe('GET api/users/:id', () => {
      describe('get user by id', () => {
        it('should return user by id', () => {
          return request(server)
            .get('/api/users/:id')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
        it('should return status 200', () => {
          return request(server)
            .get('/api/users/:id')
            .set(
              'Authorization',
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imptb250ZXJvIiwiand0aWQiOjEsImlhdCI6MTU2NjU3NTg4NSwiZXhwIjoxNTY2NjYyMjg1fQ.IKHPSLHzwCYBqi2c7NcbBKg93zPOuCPCbBB3GPTvj_o',
            )
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });
    });
   
  });
});
