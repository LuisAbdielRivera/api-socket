import { Router } from "express";
import {
  deleteSocket,
  getAll,
  getOne,
  insertSocket,
  updateSocket,
} from "../controllers/sockets.cotroller.js";
const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", insertSocket);
router.put("/:id", updateSocket);
router.delete("/:id", deleteSocket);

export default router;
