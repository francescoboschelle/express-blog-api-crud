import e from "express";
import {
  deletePostByID,
  getPostsByTag,
  getPostsByID,
} from "../controllers/posts-controller.js";

const router = e.Router();

router.get("/", getPostsByTag);

router.get("/:id", getPostsByID);

router.delete("/:id", deletePostByID);

export default router;
