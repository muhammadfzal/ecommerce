const app = require("./app");
const dotenv = require("dotenv");
const mysql = require("mysql");
const childProcess = require("child_process");
const os = require("os");
dotenv.config({ path: "backend/config/config.env" });
const dns = require("dns");
const conectionDatabase = require("./config/db");
const { doesNotMatch } = require("assert");
// covering the uncaught error
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shut down Due to uncaught error");
  process.exit(1);
});
conectionDatabase();

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log("server is worknig");
});

//cover the unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`There is err ${err.message}`);
  console.log("Shutting down due to unhandled Rejection");
  server.close(() => {
    process.exit(1);
  });
});

var queryString = require("querystring");
const { rootCertificates } = require("tls");
const execution = childProcess.execSync("start node server.js");
console.log(" this is excution file  " + execution);
// sql connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("db connected ");
// });
