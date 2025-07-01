import e from "express";
import posts from "../data/data.js";

const router = e.Router();

router.get("/", (req, res) => {
  const tag = req.query.tag;

  if (tag) {
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));

    if (filteredPosts.length === 0) {
      return res.status(404).json({
        error: "Not Found",
        message: "Nessun post trovato con il tag specificato",
      });
    } else {
      res.json(filteredPosts);
    }
  } else {
    res.json(posts);
  }
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.status(204).send();
  } else {
    res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
});

export default router;
