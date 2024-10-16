const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");


router.get("/v1", con.getdata_controller);
// router.post("/api/v1", con.postdata_controller);
// router.put("/api/v1", con.putdata_controller);
// router.delete("/api/v1", con.deletedata_controller);

module.exports = router;