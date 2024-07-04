import express from 'express';
import {sendMessage} from '../controllers/messagecontroller.js';
import protectRoute from "../middlewares/protectRoutes.js";


const router = express.Router();
router.post('/send/:id',protectRoute,sendMessage);

export default router;