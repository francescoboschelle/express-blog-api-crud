import e from "express";
import postsRouter from "./routers/posts.js";

const app = e();
const port = 3000;

app.use(e.static("imgs"));
app.use(e.json());
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Express Blog API Crud");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
