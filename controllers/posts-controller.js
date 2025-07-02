import posts from "../data/data.js";

function validateBody(body) {
  if (
    !body ||
    !body.title ||
    (body.title && typeof body.title !== "string") ||
    !body.content ||
    (body.content && typeof body.content !== "string") ||
    (body.tags && !Array.isArray(body.tags))
  ) {
    return false;
  } else {
    return true;
  }
}

function index(req, res) {
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

function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json(post);
}

function store(req, res) {
  const body = req.body;

  console.log("Body:", body);

  if (!validateBody(body)) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Dati mancanti o non validi",
    });
  }

  const newPost = {
    id: posts[posts.length - 1].id + 1 || 1,
    title: body.title,
    content: body.content,
    image: body.image || null,
    tags: body.tags || [],
  };

  posts.push(newPost);
  res.status(201).json(newPost);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  const body = req.body;

  if (!validateBody(body)) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Dati mancanti o non validi",
    });
  }

  post.title = body.title;
  post.content = body.content;
  post.image = body.image || null;
  post.tags = body.tags || [];

  res.json(post);
}

function modify(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  const body = req.body;

  post.title = body.title || post.title;
  post.content = body.content || post.content;
  post.image = body.image || post.image;
  post.tags = body.tags || post.tags;

  res.json(post);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  posts.splice(posts.indexOf(post), 1);
  res.status(204).send();
}

export default {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
