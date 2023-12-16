import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get(`/about`, (req, res) => {
  res.render("about");
});
router.get(`/post`, (req, res) => {
  res.render("post");
});

export default router;
