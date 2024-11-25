import { Router } from "express";
import userController  from "../controllers/userController";

import LoginRequired from "../middlewares/LoginRequired";

const router = new Router();

router.post('/', userController.store);
//router.get('/',LoginRequired, userController.index);
//router.get('/:id', userController.show);

router.put('/:id', LoginRequired, userController.update);
router.delete('/:id', LoginRequired, userController.delete);

export default router;
