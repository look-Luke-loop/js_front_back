import { Router } from "express";

import photoController from "../controllers/photoController";
import loginRequired from "../middlewares/LoginRequired";

const router = new Router();

router.post('/', loginRequired, photoController.store);
export default router;
