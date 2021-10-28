import express from 'express';
import welcome_handler from "../handler/welcome"

const router = express.Router();

const welcomepage = router.get('/', welcome_handler);

export default welcomepage