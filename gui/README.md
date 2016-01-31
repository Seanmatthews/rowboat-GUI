# GUI

To run, make sure the relevant ROS things are running on the server, and just hit the index.html page.

## Developing

We're using webpack. You'll need to do:

`npm install webpack -g`

To install webpack globally. Also make sure you're up to date with the node packages:

`npm install`

That should populate the `node_modules` folder.

You can run webpack one of two ways:

`webpack --watch`

This will bundle all the files to dist/bundle.js

Or, you can run the `webpack-developent-server` to avoid reloading the page:

```
// you only need to run this once. This installs the dev server globally.
npm install webpack-dev-server -g

// this is the money shot right here
webpack-dev-server --port 8081
```

We need to run the dev server on port 8081 because rosbridge lives on 8080.
