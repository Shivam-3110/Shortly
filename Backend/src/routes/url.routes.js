import express from "express";
import { createUrl,getAllUrl,deleteUrl} from "../controllers/url.controller.js";
const router = express.Router();
router.post("/",createUrl);
router.get("/",getAllUrl);
router.delete("/:id",deleteUrl);





export default router