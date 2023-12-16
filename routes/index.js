import express from "express";

import photoRouter from "./photo.js";
import page from "./page.js";

const router = express.Router();

router.use(photoRouter);
router.use(page);

export default router;
