import express from 'express';
import commerce_handler from "../handler/commerce"

const router = express.Router();

const commerce = router.get('/commerce', commerce_handler);

export default commerce