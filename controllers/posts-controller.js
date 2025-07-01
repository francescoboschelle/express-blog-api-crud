import posts from "../data/data.js";

export function getPostsByID(req, res) {
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
}

export function getPostsByTag(req, res) {
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
}

export function deletePostByID(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    posts.splice(posts.indexOf(post), 1);
    res.status(204).send();
  } else {
    res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
}
