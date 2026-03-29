import express from "express";

const router = express.Router();

let posts: any[] = [];

router.post("/post", (req, res) => {
  const post = {
    id: Date.now(),
    content: req.body.content,
  };

  posts.push(post);
  res.json(post);
});

router.get("/feed", (req, res) => {
  res.json(posts);
});

export default router;
