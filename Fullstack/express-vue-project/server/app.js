import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import userRoutes from './routes/user.routes.js';

const app = express();

var corsOptions = {
  origin: "http://localhost:60800"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

userRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 60801;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
