# Tdd-Todo
Simple ToDo list application with BDD and TDD approach.
If you look at the comments, you can better understand the approach, in this approach firstly, I started the acceptance test which is my expected behavior from customers
Then, moved to front-end and wrote basic unit test my all test failed which is expected, I started the development through my test. Same scenario for the backend.
## Instalation
### Regular
cd todo-backend
npm install
npm start & npm test
cd ..
cd todo-frontend
npm install
npm start & npm test
cd ..
cd ToDo_Acceptance
npm install
For run test
go specs folder
open todo.spec -> run spec


### Docker
cd todo-backend
docker build -f Dockerfile -t server .
cd ..
cd todo-frontend
docker build -f Dockerfile -t client .
cd ToDo_Acceptance
docker build -f Dockerfile -t acceptance .
cd ..
docker - compose up
