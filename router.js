import express from "express";

export const userRouter = express.Router();

userRouter.get("/profile", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("edit user"));
userRouter.get("/password", (req, res) => res.send("user password"));
