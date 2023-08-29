var mysql = require('mysql');

const host = "127.0.0.1";
const user = "amujhon";
const passwort = "Olafqueashe1416";

var con = mysql.createConnection({
  host: host,
  user: user,
  password: passwort,
  database: "Security_breach"
});

con.connect(function(err) {
  if (err) throw err;
  
  console.log("Connected!");

});


module.exports = con;