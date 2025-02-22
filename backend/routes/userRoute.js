import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const useRouter = express.Router();

useRouter.post("/register", registerUser);
useRouter.post("/login", registerUser);
useRouter.post("/admin", registerUser);

export default useRouter;
