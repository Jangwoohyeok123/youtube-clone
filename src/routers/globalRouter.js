import express from "express";
import { trending, search } from "../controllers/videoController.js";
import { join, login } from "../controllers/userController.js";

// router 란 경로를 먹고 경로에 대한 http 메소드를 controller 와 매칭시키는 역할을한다.
const globalRouter = express.Router();

// globalRouter 객체에 함수를 심는 중
// router 에 심어질 function 이 controller 라고 봐도 됨
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;