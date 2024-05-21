const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("user Logged In");
});

router.post("/register", (req, res) => {
  res.send("user Registerd");
});

router.post("/userData", (req, res) => {
  res.send("user Data obtained");
});

module.exports = router;
