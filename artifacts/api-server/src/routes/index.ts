import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import leadMagnetRouter from "./leadMagnet";
import resendWebhookRouter from "./resendWebhook";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(leadMagnetRouter);
router.use(resendWebhookRouter);
router.use(chatRouter);

export default router;
