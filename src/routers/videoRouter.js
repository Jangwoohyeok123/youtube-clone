import express from "express";

const videoRouter = express.Router();
const sexRouter = express.Router();
videoRouter.use("/sex", sexRouter);
sexRouter.get("/sexgood", (req, res) => {
  res.send("sex");
});

videoRouter.route(sexRouter);

export default videoRouter;
