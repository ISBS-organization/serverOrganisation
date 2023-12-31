
//server.js
const app = require("./index");

const port =  process.env.PORT || 5000;

//server connect
app.listen(port || 5000, (err) =>
  err ? console.error(err) : console.info(`server listening on port ${port}!`)
);

// ---- database function imports
const connectDB = require("./config/mongoDB_connect.config");

// ---- database function execute
connectDB();