# About

A simple JSON mock API for emulating MessageNet's backend, in order to service the React Proof of Concept.

Just for speed and simplicity, the mock DB/API is contained in a single monolithic JSON file.

Each top-level key will be the endpoint.

# How to Use

To start the mock API, run the following command in your terminal (React runs on port 3000, so we use a different port for this): 

```npx json-server --watch src/db.json --port 3001```

You should see the API running on:

```http://localhost:3001```

Each top-level key in the JSON file will map to its own endpoint. The npx json-server command, once the server is running, should list the endpoints available for you.

You can test it with curl like this, for example:

```curl http://localhost:3001/users```

To get a specific user (by user ID), for example:

```curl http://localhost:3001/users/2```

# Reference

Official repo: https://github.com/typicode/json-server