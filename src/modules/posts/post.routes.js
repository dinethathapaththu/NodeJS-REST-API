import { Router } from "express";
import { validate } from "express-validation";
import { authJwt } from "../../services/auth.services";

import * as postController from "./post.controller";
import postValidation from "./post.validator";

const routes = new Router();

routes.post(
  "/",
  authJwt,
  validate(postValidation.createPost),
  postController.createPost
);

routes.get("/:id", authJwt, postController.getPostById);
routes.get("/", authJwt, postController.getPostsList);
routes.patch(
  "/",
  authJwt,
  validate(postValidation.updatePost),
  postController.updatePost
);
routes.delete("/:id", authJwt, postController.deletePost);

routes.post("/:id/favorite", authJwt, postController.favoritePost);

export default routes;
