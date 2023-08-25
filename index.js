require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;

app.use(cors({ origin: "*" }));

app.use(express.json());

//ROUTES
app.use("/visualizers", visualizersRoute);

// app.use("/signup", signupRoute);

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("Hey, Your server is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} from express`);
});
