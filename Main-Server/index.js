const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 5000;
const axios = require("axios");

const publicDirectoryPath = path.join(__dirname, "../React-Application/build");

app.use(morgan("dev"));

app.use("/application", express.static(publicDirectoryPath));

app.use("/login", express.static(publicDirectoryPath));

app.get("/", (req, res) => res.send("Main-Server"));

app.get("/launch-application", async (req, res) => {
  const { code } = req.query;

  if (code === "123") {
    const response = await axios.get("http://localhost:6000/hit-service", {
      params: { code }
    });
    if (response.data.result === "success") {
      res.redirect(`/application?code=${code}`);
    } else {
      res.status(400).send();
    }
  } else {
    res.send(`Incorrect Code: ${code}`);
  }
});

app.listen(port, () => console.log(`Main-Server listening on ${port}`));
