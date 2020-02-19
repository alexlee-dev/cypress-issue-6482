const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 6000;

app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Outside-Service"));

app.get("/hit-service", (req, res) => {
  const { code } = req.query;

  if (code === "123") {
    setTimeout(() => {
      res.send({ result: "success" });
    }, 5000);
  } else {
    res.send({ result: "failure" });
  }
});

app.listen(port, () => console.log(`Outside-Service listening on ${port}`));
