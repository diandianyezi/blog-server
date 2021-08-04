const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'zhangting1993',
    database: 'yezi'
})

connection.connect((err) => {
    if (err) { console.log("连接失败", err) }
    else { console.log("连接成功") }
})

connection.query('SELECT * FROM `user_info`;', function(error, results, fields) {
    console.info(results)
})

connection.end()