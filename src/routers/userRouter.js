import express from "express";

const userRouter = express.Router();

// router 는 결국 경로를 먹고 그 경로로 온 http 메소드와 controller 를 맵핑 시킴 => 이러한 정의로 볼 경우 express server, app 도 router 라고 불 수 있다.
userRouter.get("/users", (req, res) => {
  res.send("hello");
});

export default userRouter;