import express from "express";
import { createUrl,getAllUrl} from "../controllers/url.controller.js";
const router = express.Router();
router.post("/",createUrl);
router.get("/",getAllUrl);





export default router