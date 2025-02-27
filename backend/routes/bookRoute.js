import express from "express";
import {
  listBooks,
  addBook,
  removeBook,
  singleBook,
} from "../controllers/bookController.js";
import upload from "../middleware/multer.js";

const bookRouter = express.Router();

bookRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  addBook
);
bookRouter.post("/remove", removeBook);
bookRouter.get("/single", singleBook);
bookRouter.get("/list", listBooks);

export default bookRouter;
