import e from "express";
import {
  index,
  show,
  store,
  destroy,
  update,
  modify,
} from "../controllers/posts-controller.js";

const router = e.Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", store);

router.put("/:id", update);

router.patch("/:id", modify);

router.delete("/:id", destroy);

export default router;
