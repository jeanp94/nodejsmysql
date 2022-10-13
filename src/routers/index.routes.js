import {Router} from 'express';
import { queryIndex } from '../controllers/index.controller.js';


const router = Router();

router.get('/', (req, res) => res.send("Pagina inicio"));

router.get('/ping', queryIndex);

export default router;