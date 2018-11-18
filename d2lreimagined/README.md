# React_Express
- This repository can also be used as a starting point (boilerplate) for React/express/docker ->
Make sure to install the following

- Node
- Docker

## Information for Group
https://github.com/s1iqbal/SoftwareEng/tree/ReactExpressBoilerPlate/
This is the boilerplate that we are using if anyone does decide to code whatever they want (not necessary)
ok its necessary to do something but leave your github emails so I can leave you as collaborators.

Also the way our git is working is, 
1. First add yourself as collab by requesting me OR download the branch ReactExpressBoilerPlate. (ignore 2 and 3 if downloading ZIP)
2. Create a branch for yourself by writing git checkout -b "<mybranchname>"
3. Explore the boilerplate application in the branch "ReactExpressBoilerPlate" branch
you can switch to that branch by writing git checkout "ReactExpressBoilerPlate"
4. If you check the github for that branch or in your file directory, there are two folders. client and api. Inside those folders, both of them have README.md files

Feel free to check it out if you want to work on either the backend or frontend depending on whichever folder you are in
also There is another readme outside of those folders, it will teach you how to run the app.

The environment is done on ubuntu 18.04.1 LTS. Ill be making a docker container for the app so we can all work on it from any operating system. 

You can still work on it with windows and mac im sure though without it but if you run into bug, thats not the applications fault before the docker is made.


Some reference: 
Signup/Login Form: https://serverless-stack.com/chapters/create-the-signup-form.html 
AWS Setup: https://serverless-stack.com/chapters/configure-aws-amplify.html


## Where can I check the tutorial that the boilerplate is based on if I want to create it from scratch?
Just follow the link below.
- [Create a React FrontEnd, a Node/Express BackEnd and connect them together](https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)

## About the app
Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express). Will be creating a command to concurrently run Server/API and Client together.

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected
1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `API is working properly`, it means the API is working.
4. Enjoy!
