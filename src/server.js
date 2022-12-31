import express from "express"; // import 하기전에 그 모듈을 선언과 실행을 한다. 순서를 헷갈리면 안됨
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import mysql from "mysql";
import pug from "pug";

const app = express();
const port = 3000;

const logger = morgan("short");
// import 와 export 로 연결된 모듈들은 선언을 모조리 먼저 한 후 에 package.json 의 main 부터 시작한다.
// export 가 먼저 실행되고
// 1. server.js 를 실행한다.
// 2. 선언을 한다.
// 3. 선언도중 import 가 있다면 그 모듈을 실행시킨다.
// 4. 모든 선언이 끝나면 server.js 를 실행부를 실행한다.

// router 에 접근할 경우 controller를 배정해주는게 목적이다.
// get 요청이 온 후 진행될 middleware
app.set("view engine", "pug"); // express 는 view 에 pug 엔진을 사용한다.
app.use(logger);

// router 등록 router : url 을 분리해주는 역할을 해줘 계층형으로 resource를 다루기 좋게 만든다.
// globalRouter => userRouter, videoRouter 의 개념이 아니다!
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.listen(port, () => {
  console.log(`server is opened in ${port} port!`);
});
