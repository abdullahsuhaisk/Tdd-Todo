const request = require('supertest')
const app = require('../app')
const TodoModel = require('../Models/TodoModel')

// 2- Back-end service to store a persistent state of ToDo list and ability to ONLY adding ToDo

beforeEach(() => {
  // Clean TodoModel remove all data
})

it('returns 200 OK when add todo is valid', (done) => {
  request(app).post('/todo').send({
    todo: 'first todo'
  }).then((response) => {
    expect(response.status).toBe(200)
    done()
  })
})
// .expect(200,done)

it('returns success mesage  when add todo is valid', (done) => {
  request(app).post('/todo').send({
    todo: 'first todo'
  }).then((response) => {
    expect(response.body.message).toBe("todo added")
    done()
  })
})

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

it('save the todo correctly to database', (done) => {
  request(app).post('/todo').send({
    todo: 'first todo'
  }).then((res) => {
    TodoModel.findOne({ _id: res.body.id }).then((todo) => {
      console.log(todo)
      expect(todo.todo).toEqual('first todo')
      done()
    })
  })
})
