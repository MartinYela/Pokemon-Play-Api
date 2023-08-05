import  express  from "express";
import { loginCtrl } from "./auth.controller.js";

const router = express.Router();


router.route('/login')
    .post(loginCtrl)    //Login con password e email, genera token

export default router;
