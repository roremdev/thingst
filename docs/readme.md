<p align="center">
    <img src="./logo.svg" alt="Logo" width="480" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/dynamic/json?color=EBCB8B&style=for-the-badge&label=version&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Froremdev%2Fthingst%2Fmaster%2Fpackage.json" alt="JavaScript" />
</p>

### ✨About The Project

The propuse of this project is to create a beautiful backend (REST or GraphQL) that will be a simple example of how to develop a backend with NodeJS and driver connection databases.

The use for this project will depend on the use case:

-   For customize the integration project with CI environments (Heroku, AWS/GPC, etc).
-   For server a server done with MVC architecture.
-   Implementation of a simple API infraestructure (REST or GraphQL).

> Note. This project is on https://thingst.herokuapp.com/

### 📦 Getting Started

#### ⚡️ Scripts

| Process        | Script          | Description                              |
| -------------- | --------------- | ---------------------------------------- |
| Initialization | `npm run init`  | Configure environment for git hooks.     |
| Development    | `npm run dev`   | Serves to server on port 3000.           |
| Testing        | `npm run test`  | Run all test (unit test or integration). |
| Building       | `npm run build` | Build the code base to `dist` directory. |
| Production     | `npm run start` | Simulate the server for production.      |

> Note. For mode Production, you can use [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to simulate the project witih `heroku local`.

#### ⚙️ Configuration

> Note. Thingst is already configured for git hooks and CI.

Husky is a tool that helps you to configure git hooks. Since the reason for use git hooks because each commit has the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) structure.

Also, the Github Actions is a tool that helps you to run the tests and build the project.

> Note. You can view this feature at `.github/workflows` direcotry

### Author

> **Emmanuel Rodriguez** - Full Stack Developer

[![Twitter](https://img.shields.io/badge/Twitter-ECEFF4?style=for-the-badge&logo=Twitter)](https://twitter.com/roremDev)
[![GitHub](https://img.shields.io/badge/GitHub-ECEFF4?style=for-the-badge&logo=GitHub&logoColor=2E3440)](https://github.com/roremdev)
[![Medium](https://img.shields.io/badge/Medium-ECEFF4?style=for-the-badge&logo=Medium&logoColor=2E3440)](https://medium.com/@roremDev)
