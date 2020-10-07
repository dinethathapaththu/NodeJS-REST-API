import { Router } from "express";
import { validate } from "express-validation";
import { authLocal } from "../../services/auth.services";

import * as userController from "./user.controller";
import userValidator from "./user.validator";

const routes = new Router();

routes.post("/signup", validate(userValidator.signup), userController.signUp);
routes.post("/login", authLocal, userController.login);

export default routes;
