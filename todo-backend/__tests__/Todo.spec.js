const request = require('supertest')

const app = require('../app')
const TodoModel = require('../Models/TodoModel')


beforeAll(async () => {
});

afterAll(async () => {
});

describe('Todo posting routes and Db tests', () => {
  // POST TODO
  it('returns 200 OK when add todo is valid',async () => {
    request(app).post('/todo').send({
      todo: 'first todo'
    }).then((response) => {
      expect(response.status).toBe(200)
    })
  })

  // GET TODO
  it('returns 404 when add todo request is get', (done) => {
    request(app).get('/todo').then((response) => {
      expect(response.status).toBe(404)
      done()
    })
  })

  // // UPDATE TODO
  // it('returns 404 when delete todo request is get', (done) => {
  //   request(app).get('/todo').then((response) => {
  //     expect(response.status).toBe(404)
  //     done()
  //   })
  // })

  // CHECK ADD TODO
  it('returns success message  when add todo is valid',async () => {
    request(app).post('/todo').send({
      todo: 'first todo'
    }).then((response) => {
      expect(response.body.message).toBe("todo added")

    })
  })

  // CHECK TODO ADDED TO DATABASE
  it('save the todo to database', (done) => {
    request(app).post('/todo').send({
      todo: 'first todo'
    }).then((res) => {
      TodoModel.findOne({ _id: res.body.id }).then(todo => {
        expect(todo)
        done()
      })
    })
  })

  // CHECK TODO SAVED CORRECTLY
  it('save the todo correctly to database', (done) => {
    request(app).post('/todo').send({
      todo: 'first todo'
    }).then((res) => {
      TodoModel.findOne({ _id: res.body.id }).then((todo) => {
        expect(todo.todo).toEqual('first todo')
        done()
      })
    })
  })
})


