import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import chatRouter from "./chat";
import playbookRouter from "./playbook";
import demoRequestRouter from "./demo-request";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(chatRouter);
router.use(playbookRouter);
router.use(demoRequestRouter);

export default router;
