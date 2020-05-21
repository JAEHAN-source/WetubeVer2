import express from "express";
import routes from "./routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("welcome home"));
globalRouter.get(routes.join, (req, res) => res.send("welcome join"));
globalRouter.get(routes.login, (req, res) => res.send("welcome login"));
globalRouter.get(routes.logout, (req, res) => res.send("welcome logout"));
globalRouter.get(routes.search, (req, res) => res.send("welcome search"));

export default globalRouter;
