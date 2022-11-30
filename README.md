# Notes-API

 `Its a backend designed for a notes taking app`

<br>

## Tech Stack

**The tech stacks used:**

- [**NodeJS**](https://nodejs.org/) - Runtime environment
- [**Express**](https://expressjs.com/) - Framework used to build the API
- [**MongoDB**](https://mongodb.com/) - No SQL database which is used for the storing the todo
- [**Mongoose**](https://mongoosejs.com/) - Library which is used to interact with the MongoDB database 

<br>

## Endpoint:

**`/todos`**: Get the info of all the todos [GET route]

**`/todo/:todoID`**: Get the info about a single todo [GET route]

**`/create`**: Create a new todo [POST route]

**`/delete/:todoID`**: Delete a pre-existing todo [DELETE route]

**`/update/:todoID`**: Update a pre-existing todo [PUT route]

> The todoID is been generated when you create a new todo


