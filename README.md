# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### GOOGLE LOGIN INTEGRATION IN WEBSITE

## STEP-1  
## CREATE AUTHORIZATION CREDENTIAL 
1= Go to the Credentials page ---
https://console.cloud.google.com/apis/credentials?project=nodal-listener-312615&folder=&organizationId=

## STEP-2  Create a new project
1- enter your project name then click create button

## STEP-3 after create project it will redirect to credential page

https://console.cloud.google.com/apis/credentials?project=nodal-listener-312615&organizationId=0

1- For google login you will create OAuth clientId from credential page, this key is used
   for user consent so that your app can access the user's data.

2- Select the Web  application type.

3- Now add domain for authorize origin and authorize redirect URIs

4- Save the data then it will create the  clientId for your website app

## Step-4 Go to your project 
## You must include the Google Platform Library on your web pages that integrate Google Sign-In.

<script src="https://apis.google.com/js/platform.js" async defer></script>

 this script added your index.html file 

## Specify the client ID you created for your app in the Google Developers Console with the google-signin-client_id meta element.

<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">

in content you will add your clientId that will genrate from OAuth-clientId

## step-5     Add a Google Sign-In button

<div class="g-signin2" data-onsuccess="onSignIn"></div>

## step-6  Get profile information

After you have signed in a user with Google, you can access the user's ID, name, profile URL, and email address.