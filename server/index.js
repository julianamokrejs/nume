const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');

//ROUTERS
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

// const moodRouter = require("./routes/Moods");
// app.use("/moods", moodRouter);

// const eventsRouter = require("./routes/Events");
// app.use("/events", eventsRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("yay");
    });
});

const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    database.query(
        "INSERT INTO users (username, email, password) VALUES (?,?,?)",
        [username, email, password],
        (err, result) => {
            console.log(err)
        }
    );

});

