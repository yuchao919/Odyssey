const express = require("express");
const cors = require("cors");
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Synced db.");
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

require("./routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 58080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});