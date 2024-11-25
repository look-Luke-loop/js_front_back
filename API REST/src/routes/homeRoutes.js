import { Router } from "express";
import homeController  from "../controllers/homeController";
import LoginRequired from "../middlewares/LoginRequired";

const router = new Router();

router.get('/', homeController.index);
export default router;
