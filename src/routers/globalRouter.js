import express from "express";
import { trending, search } from "../controllers/videoController.js";
import { join, login } from "../controllers/userController.js";

// router 란 경로를 먹고 경로에 대한 http 메소드를 controller 와 매칭시키는 역할을한다.
const globalRouter = express.Router();

// globalRouter 객체에 함수를 심는 중
// router 에 심어질 function 이 controller 라고 봐도 됨
// 주의 위에서 부터 아래로 코드가 읽히기 때문에 params 를 쓰는 경우 생각해서 넣어야 함
// 보통 parameter 는 아래로 넣는다. => parameter 의 type 은 object 이다.
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search/:id/:sex", search);

export default globalRouter;

/* lan 환경 
=> router ('/') 
  => controller ('/') // controller 가 router와 url 이 똑같아 이해하는데 애를 먹었다. 같아도 상관없는데 헷갈리니 위와 같이 특수한 경우만 코드를 쓴다.
  => controller ('/join')
  => controller ('/login')
  => controller ('/search')
*/
