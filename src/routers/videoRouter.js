import express from "express";
import {
  upload,
  edit,
  deleteVideo,
  watch,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;

/* lan 환경
=> router ('/videos')
  => controller (':id')
  => controller (':id/edit')
  => controller (':id/delete')
  => controller ('/upload')
*/
