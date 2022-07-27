<h1 align="center"> Modanisa Test-Driven-Development Todo Challenge
</h1>
<h2 align="center">
  <img alt="logo" src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" />
</h2>

---

<h4 align="center">
  <a href="#information_source-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#seedling-minimal-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beginner-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</h4>

## :information_source: About

Simple ToDo list application with BDD and TDD approach.
If you look at the comments, you can better understand the approach, in this approach firstly, I started the acceptance test which is my expected behavior from customers
Then, moved to front-end and wrote basic unit test my all test failed which is expected, I started the development through my test. Same scenario for the backend.

## :rocket: Technologies

The project was developed using the following technologies:

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [Taiko](https://taiko.dev/)
- [Gauge](https://gauge.org/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Mongo Db](https://www.mongodb.com/)
- [ESLint](https://eslint.org/)

## :seedling: Minimal Requirements

- [Node v10+](https://nodejs.org/en/docs/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/).
- [Docker](https://www.docker.com/)

## :beginner: Getting Started

<b>Cloning the repository:</b>

- `$ git clone https://github.com/abdullahsuhaisk/Tdd-Todo.git`

<b>Download the dependences:</b>

<p>This project has 3 projects inside of it</p>
<p>Every step has own install.You can follow regular installation or docker</p>

### :link: Regular Installation
<b>For Front-End</b>
-`cd todo-frontend`
- `npm install`
- `npm start && npm test`

<b>For Back-End</b>
-`cd todo-backend`
- `npm install`
- `npm start && npm test`

<b>For Acceptance</b>
-`cd ToDo_Acceptance`
- `npm install`

<p> For run test go specs folder open todo.spec -> press run spec on left corner </p>

### :link: Docker Installation
<b>For Front-End</b>
- `cd todo-frontend`
- `docker build -f Dockerfile -t client`
- `cd ..`

<b>For Back-End</b>
- `cd todo-backend`
- `docker build -f Dockerfile -t server`
- `cd ..`

<b>For Acceptance</b>
- `cd ToDo_Acceptance`
- `docker build -f Dockerfile -t acceptance`
- `cd ..`

 After above steps, on root you should run =>
 - `docker - compose up`
 
