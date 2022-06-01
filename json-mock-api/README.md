# About

A simple JSON mock API for emulating MessageNet's backend, in order to service the React Proof of Concept.

Just for speed and simplicity, the mock DB/API is contained in a single monolithic JSON file.

Each top-level key will be the endpoint URL.

# How to Use

This project has configured package.json with an API property; so to start the mock API, simply run the following command in your terminal: 

```npm run api```

You can also use npx to start the mock server directly (React runs on port 3000, so we use a different port for this):

```npx json-server --watch json-mock-api/src/db.json --port 3001```

You should see the API running on (the terminal output will also show you the endpoints available, depending on how the db.json file is laid out):

```http://localhost:3001```

Each top-level key(s) in the db.json file will map to its own endpoint. The npx json-server command, once the server is running, should list the endpoints available for you.

You can test it with curl like this, for example (substitute whatever endpoints are actually available):

```curl http://localhost:3001/users```

Further endpoints are available, as determined by the depth of your JSON file. For example you might get a specific user (by user ID defined in the JSON):

```curl http://localhost:3001/users/2```

# Reference

Official repo: https://github.com/typicode/json-server