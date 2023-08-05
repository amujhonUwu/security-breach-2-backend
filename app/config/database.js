var mysql = require('mysql');

const host = "192.168.100.164";
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