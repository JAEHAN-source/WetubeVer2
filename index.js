const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const middleware = (req, res, next) => {
    console.log("between");
    next();
}

const handleHome = (req, res) => res.send("welcome to home");
const handleProfile = (req, res) => res.send("your profile");

app.use(middleware);

app.get("/", handleHome);
app.get("/profile", handleProfile);


app.listen(PORT, handleListening);