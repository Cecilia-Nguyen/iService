const controller = require("../controller/validateUser");

const express = require("express");
const router = express.Router();

router.post("/register", controller.postDetails);

module.exports = router;
