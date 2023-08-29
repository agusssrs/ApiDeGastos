import { Router } from "express";
import {crearGasto, getGasto, getGastoByDate} from '../controllers/gastos';

const router = Router();

router.get('/', getGasto);

router.get('/:fecha', getGastoByDate)

router.post('/', crearGasto);

export default router;