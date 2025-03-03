import express from "express";
import {
  listBooks,
  addBook,
  removeBook,
  singleBook,
} from "../controllers/bookController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const bookRouter = express.Router();

bookRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  addBook
);
bookRouter.post("/remove", adminAuth, removeBook);
bookRouter.get("/single", singleBook);
bookRouter.get("/list", listBooks);

export default bookRouter;
