import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3310", 
  database: "software",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MariaDB:", err);
    return;
  }
  console.log("Connected to MariaDB");
});
