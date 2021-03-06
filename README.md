# Full Stack GraphQL API App

This app talks to a custom GraphQL server powerd by prisma, apollo, and nexus. It als uses Postgresql to store its data.

It revolves around getting Anime/Manga and Lists. For Anime and Manga, its mainly by type(Either ANIME or MANGA) ID and for Lists its both by User ID and ID.

This is to demonstrate my skill in created a backend that can serve a front end and data from the backend to the front end.

## Explanations

To create a List you need only sign up with a new user, then log out. It will save the list.

If you want to save stuff to the lists then just go to either see anime or see manga and click add. Then log out and log back in. The list should be saved.

To delete just hit delete favorite list on log out. It will delete the list that is associeted with that user. 

## Commands

All commands can be executed with yarn/npm but better to stick with one when deploying.

"start"

This just starts the server. Right now id doesn't do much as I've ripped out the RESTful back end from the Front End but it still serves the production version of the front end. Though it will not have the REST stuff in it as at one point I thought we were just going to do what we did with Heroku and just point the browser to the backend and go from there.

## Files to look for

### index.js

This is the backend entry point. It's how everything is setup and working.

### api.routes.js

This is how the api routes are configured for the backend. Mainly for user auth and character serving.

### api.controller.js

This is how all the data is served and recieved.

### user.model.js

This is the model for user data.

### char.model.js

This is the model for character data.

## GraphQL Files

### server.js

This is the GraphQL entry point

### seed.js

This seeds the postgres database

### schema.js

This conmtains the resolvers for the GraphQL operations.

### context.js

This contains the Prisma context for the resolvers to work with.

### /data

This contains the data for the seed.js file.

### schema.prisma

This has the schema for prisma to generate the graphql schema.

## Client

A full README for the client can be found in the client folder.


# Endpoints

Will be re done for final project.

## /api/Auth

This auths the user by reading the database and confirming the passwords match and sending a message to the client that it confirmed the matching passwords. I use post as a means of concealing user data, otherwise this is basically the get.

## /api/Create

This creates new users. It salts and hashes the password and then sends back an auth message to the client.

## /api/Delete/:UserName

This deletes the user. If the user decided to delete their favorite list it also deletes their user information.

## /api/Change

This updates the user's password if they feel they need to update their password. This is a put.

# GraphQL and Docker

First, if you aren't my professor and aren't already running docker, download it [here](https://docs.docker.com/get-docker/). You may have to restart if you are on Windows.

## Installation

Once the root and client directories have the appropriate .envs (prisma feeds off of root's env, if an evn currently exists in /prisma get rid of it) do the following:

First run: ```npm run massInstall```

Second, run: ```npm run setup```

Lastly, run: ```npm run gqlDev```

And that should have you up and running. I'll be available for contact the all day for the week of May 3, 2021 (for furture stumblers of the project), if you have any questions.
