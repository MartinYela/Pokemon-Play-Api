import express from "express";
import { createUserCtrl } from "./user.controller.js";

const router = express.Router();

router.route('/createUser')
    .post(createUserCtrl)

export default router;