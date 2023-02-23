const mysql = require("mysql");

module.exports = function createConnect(config) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);
    connection.connect((err) => (err ? reject(err) : resolve(connection)));
  });
};
