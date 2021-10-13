<p align="center">
    <img src="public/logo.svg" alt="Logo" width="280">
</p>
<p align="center">
    <img src="https://img.shields.io/badge/version-0.2.0-yellow?style=for-the-badge" alt="JavaScript" />
</p>

## About The Project
The propuse of this project is to create a beautiful backend (REST or GraphQL) that will be a simple example of how to develop a backend with NodeJS and driver connection databases.

The use for this project will depend on the use case:
- For customize the integration project with CI environments (Heroku, AWS/GPC, etc).
- For server a server done with MVC architecture.
- Implementation of a simple API infraestructure (REST or GraphQL).

> Note. This project is on https://thingst.herokuapp.com/

## Getting Started
> Note. This project works on <a href="https://nodejs.org/en/">Node.js</a> version >=14.x.

### Scripts

|Process        |Script           |Description                              |
|---------------|-----------------|-----------------------------------------|
|Initialization |`npm run init`   |Configure environment for git hooks.     |
|Development    |`npm run dev`    |Serves to server on port 3000.           |
|Testing        |`npm run test`   |Run all test (unit test or integration). |
|Building       |`npm run build`  |Build the code base to `dist` directory. |
|Production     |`npm run start`  |Simulate the server for production. |

> Note. For mode Production, you can use [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to simulate the project witih `heroku local`.

## Configuration
> Note. Thingst is already configured for git hooks and CI.

Husky is a tool that helps you to configure git hooks. Since the reason for use git hooks because each commit has the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) structure.

Also, the Github Actions is a tool that helps you to run the tests and build the project.

> Note. You can view this feature at `.github/workflows` direcotry

### Author
@roremDev - Emmanuel Rodríguez Ramírez

*Software Engineer*