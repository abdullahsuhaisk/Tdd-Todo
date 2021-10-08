const request = require('supertest')
const app = require('../app')

// 2- Back-end service to store a persistent state of ToDo list and ability to ONLY adding ToDo

it('returns 200 OK when add todo is valid', (done) => {
  request(app).post('/todo').send({
    todo: 'first todo'
  }).expect(200,done)

})