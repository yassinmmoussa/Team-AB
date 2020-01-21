# Initial Setup

Before working on the repository, its important to have all of the project's dependency packages on your local machine, you can install them all by following these steps.

Install all the backend's dependencies:
`npm install`

Move to the frontend and install its dependencies:
`cd Frontend`
`npm install`

# Running the Server

After setting up the repository and dependencies on your machine, you can run the server on your local machine by following these steps (starting in the frontend folder). 

Build the frontend application (similar to compiling):
`ng build`

Move back to the backend folder;
`cd ..`

Run the server:
`npm start`

You should now be able to see the currently pushed homepage of the front end at the following link in your web browser:
`http://localhost:3000/`

# What's What in the Backend Folder

## bin, node_modules
These files are all auto generated, don't touch these

## Frontend
The frontend of our application

## top_secret
This folder is where your private database key is stored. If you don't have this folder, talk to the team in order to get one.

## views
This folder relates to the template engine the server supports by default, Pug. This folder may end up being removed in the future.

## .gcloudignore
The application is deployed on the Google Cloud platform, this file outlines what files shouldn't be uploaded to GCP (mostly just npm stuff that it will install on its own)

## app.js
This file is the bones of the Backend. If you're looking to do some work on the backend, you will most likely be either changing this file or one of its dependencies.

## app.yaml
Really small file telling GCP what kind of server its trying to run

## package.json, package-lock.json
These files are related to node_modules, it tells whatever device our repository is on what to install or download when you run `npm install`. package.json outlines our dependencies, and -lock contains the dependencies of those dependencies.

## ../gitignore
Files that we don't upload to git. This one has a few more files than .gcloudignore

## ../dummy-data.json
Some output from our database with course data from this calendar year for testing I/O.