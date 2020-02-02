# Initial Setup

Before working on the repository, its important to have all of the project's dependency packages on your local machine, you can install them all by following these steps.

Install all the backend's dependencies:
`npm install`

Move to the frontend and install its dependencies:
`cd Frontend`
`npm install`

# Running the Server (with auto reload)

After setting up the repository and dependencies on your machine, you can run the server on your local machine by following these steps (starting in the backend folder). 

(Note: if this is your first time running the auto reload, you most likely need to run `npm install` since a new package was added) 

Run the server and frontend:
`npm run dev`

You should now be able to see the currently pushed homepage of the front end at the following link in your web browser:
`http://localhost:4200/`

# Running the Server (no auto reload)

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
This folder is where your private database key is stored. If you don't have a database key, follow the instructions in the folder. Note:  `/top-secret` folder is now listed in .gitignore. Any change made in this dir will not be committed.

In order to authenticate Firestore db, your js is required to pass over a service account credential bundle - in the format of `some-hashed-key.json`. You may review a working example in `database.js`.

It's your responsibility to store and protect this private key as it's linked to GCP billing per requesto.

#### Setting up
1. Create a service account on GCP spare-ab and save the .json key
* `IAM & admin > Service accounts > Create service account`
2. Update the path in your js to the .json key path 
```
module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/1234.json', // UPDATE ME
  });
```

To avoid duplicating same privileges, we encourage you to inform server owners before creating a new account.  

## views
This folder relates to the template engine the server supports by default, Pug. This folder may end up being removed in the future.

## .gcloudignore
The application is deployed on the Google Cloud platform, this file outlines what files shouldn't be uploaded to GCP (mostly just npm stuff that it will install on its own)

## app.js
This file is the bones of the Backend. If you're looking to do some work on the backend, you will most likely be either changing this file or one of its dependencies.

## app.yaml
Really small file telling GCP what kind of server its trying to run
### Deploying to App Engine

Deploy your app:

    npm run deploy

By default, this application deploys to App Engine.

## package.json, package-lock.json
These files are related to node_modules, it tells whatever device our repository is on what to install or download when you run `npm install`. package.json outlines our dependencies, and -lock contains the dependencies of those dependencies.

## ../gitignore
Files that we don't upload to git. This one has a few more files than .gcloudignore

## ../dummy-data.json
Some output from our database with course data from this calendar year for testing I/O.
