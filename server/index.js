const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const db = require('./models');

app.use(express.json());
app.use(cors());

//INICIA O SERVIDOR E VERIFICA SE EXISTE ALGUMA NOVA TABELA
//PARA ADICIONAR AO BANCO DE DADOS
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("yay");
    });
});

//CONECTAR BANCO DE DADOS COM FRONT-END
const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

//ROUTERS
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const sleepEventRouter = require("./routes/SleepEvents");
app.use("/sleepEvents", sleepEventRouter);

const calendarRouter = require("./routes/Calendar");
app.use("/calendar", calendarRouter);

// const moodRouter = require("./routes/Moods");
// app.use("/moods", moodRouter);

// const eventsRouter = require("./routes/Events");
// app.use("/events", eventsRouter);


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

