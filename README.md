# Ways To Cap Demo
## Overview
The code is written in Angular and Node, using Express and a Mongo-like database through Mongoose (primarily because I wanted to see how Cosmos worked).

The backend lives in usersapi (which I suspect is non-idiomatic). Having restored packages, it can be run with  `npm start`. It was created with the express bootstrapper, so does contain a bunch of code - for instance all the views - that is currently unused. The bulk of the functionality is in routes/users.js, although some initialization happens in app.js. The model is in user.js. The .env file controls the environment but shouldn't need to be changed (the free trial Cosmos DB that it connects to will work for another couple of weeks)

The frontend lives in usersdemo, and can be run using `ng serve`, although you should edit the environment file first if necessary, to point it at the correct API endpoint. It was generated using the standard `ng generate`. The Users component is the main part of the app, with a user service handling backend comms, and a user-edit-component for viewing/editing. The user-detail component is unused.

The list of users is displayed on the main page. Clicking on a user allows you to edit them, or to upload a replacement image. Pressing Sync will POST new users, PUT updated ones, and GET a fresh list of all users from the server. 

## TODO
* Make the UI nicer
* Offline edits don't persist through browser refreshes - perhaps we'd want that
* There's no error handling or validation.
* While it's simpler, we do one PUT/POST per user. It would possibly be nicer to do one, full stop, if we're sending a whole bunch of data in one go
* We send more data than necessary to the server (including two copies of the image)
* Could consider some sort of event-sourced approach to store offline changes and for optimistic concurrency (or consider concurrency at all, it's not at the moment, so if two people edit the same user, last-one-in wins, although if a user is not edited it doesn't clash)
* Clear out unused code from backend.