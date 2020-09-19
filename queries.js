const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: 'maindb'
  });

  ///////
  // CREATE QUERIES HERE
  ///////

  var getAllPlaces = (callback) => {
      var sql = `SELECT * FROM places`;
      connection.query(sql, (err, data) => {
          if (err) {
              callback(err, null);
          } else {
              callback(null, data);
          }
      })
  }

  var getSinglePlace = (id, callback) => {
      var sql = `SELECT * FROM places WHERE id = "${id}" LIMIT 1`;
      connection.query(sql, (err, data) => {
          if (err) {
              callback(err, null);
          } else {
              callback(null, data);
          }
      });
  }

  var createPlace = (params, callback) => {
    var sql = `INSERT INTO places (name, description, image) VALUES (?, ?, ?)`;
    connection.query(sql, params, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}


  module.exports = {
    getAllPlaces,
    getSinglePlace,
    createPlace
  }