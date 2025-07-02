import e from "express";
import postController from "../controllers/posts-controller.js";

const router = e.Router();

router.get("/", postController.index);

router.get("/:id", postController.show);

router.post("/", postController.store);

router.put("/:id", postController.update);

router.patch("/:id", postController.modify);

router.delete("/:id", postController.destroy);

export default router;
