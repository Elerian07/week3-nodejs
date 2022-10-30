import mysql from "mysql2"

const q = mysql.createConnection({
    host: "localhost",
    database: "assignment 3",
    user: "root",
    password: ""
})


export default q;