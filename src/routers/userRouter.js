import express from "express";
import { remove, edit, logout, see } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;

/* lan 환경
=> router ('/users')
  => controller ('/logout')
  => controller ('/edit')
  => controller ('/remove')
  => controller (':id')
*/
