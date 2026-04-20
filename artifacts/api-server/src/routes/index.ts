import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import leadMagnetRouter from "./leadMagnet";
import leadMagnetInboundReplyRouter from "./leadMagnetInboundReply";
import resendWebhookRouter from "./resendWebhook";
import leadContactRouter from "./leadContact";
import chatRouter from "./chat";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(leadMagnetRouter);
router.use(leadMagnetInboundReplyRouter);
router.use(resendWebhookRouter);
router.use(leadContactRouter);
router.use(chatRouter);
router.use(adminRouter);

export default router;
