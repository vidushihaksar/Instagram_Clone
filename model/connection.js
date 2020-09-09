var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Haksar@1999',
    database: 'insta_pp'
})

connection.connect();
console.log("Connected to DB");
module.exports = connection;

//in case of error "Client does not support authentication protocol requested by server; consider upgrading MySQL client'," use this command

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// flush privileges;