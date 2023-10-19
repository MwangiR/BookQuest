# BookQuest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This application was refactored from using strictly routing and express, to now implementing GraphQL typeDefs, resolvers and an Apollo Server. The backend uses MongoDB; it mixes Mongoose and GraphQL queries and mutations to run queries and mutations from the UI to the database.

Refactoring this application gave me a good understanding of the power of GraphQL when paired with React. It makes sense that it was developed by Facebook as it makes the routing on the front end of the code base much cleaner.

Deploying to Heroku was a massive challenge! The main hurdle was figuring out how to connect MongoDB with Heroku. To do so you must start by setting up an account through the MongoDB Cloud Atlas. Navigate to the database access tab, giving MongoDB roles atlasAdmin access, set a password and then access the correct connection string by accessing through the database tab, the connect button, and through their accessing drivers, once their, copy the connection string, hop back over to Heroku and in your setting tab add Config Vars (key: MONGODB_URI, value: mongodb+srv://<username>:<password>@cluster0.ibn4vyk.mongodb.net/?retryWrites=true&w=majority) paste the connection string in for the value filling in your username and password in the appropriate locations.

## Live URL

[Live URL](https://quiet-stream-61642-fafe7dbb8649.herokuapp.com)

## Technologies Used

This application is powered by JavaScript. It uses React.js (v16.13.1), Node.js (v16.19.1), Express.js(v4.17.2), GraphQL(v15.8.0), and ApolloServer(3.11.1). CSS and Bootstrap (v5.2.3) were utilized to create the overall styling of the user interface.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Installation

### Installation Steps

1. Clone the Repository:

   Open your terminal and navigate to the directory where you want to create the project. Then run the following command to clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the Project Directory:
   Change your current working directory to the project folder:

   ```bash
   cd BookQuest
   ```

3. Install Dependencies:
   Run the following command to install project dependencies specified in the package.json file:
   ```bash
   npm install
   ```
4. Run the Application:
   Run the following command to start the application:

   ```bash
   npm run dev
   ```

   This will build the React application and open it in your default web browser. You can access the application at http://localhost:3000/.

- To make changes to the code base, clone the repo [Github URL](https://github.com/MwangiR/BookQuest.git), run npm i within the root directory of the terminal, then enter npm run develop -> you will then be taken to a live server running the site where if edits are made to the code base they can be seen in real time.

- Users can also feel free to access the live application directly by visiting the Heroku link [Link to live URL](https://quiet-stream-61642-fafe7dbb8649.herokuapp.com).

## Features

Features of the site include Reacts ability to easily create a one page application that appears as though it is many pages. Users can easily navigate the site, search books using the implemented GoogleAPI, and save or delete books to their profile.

## Usage Information

This application is very user intuitive, just visit the site [Link to live URL](https://quiet-stream-61642-fafe7dbb8649.herokuapp.com), navigate through different pages using the links in the nav-bar, and view desired content.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/MwangiR/)
