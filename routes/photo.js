import express from "express";

const router = express.Router();

router.post("/addPhoto", (req, res) => {
  console.log(req.body);
});

router.get("/addPhoto", (req, res) => {
  res.render("addPhoto");
});

export default router;
