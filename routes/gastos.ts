import { Router } from "express";
import {crearGasto, deleteGasto, getGasto, getGastoByDate, updateGasto} from '../controllers/gastos';

const router = Router();

router.get('/', getGasto);

router.get('/:fecha', getGastoByDate);

router.post('/', crearGasto);

router.put('/:item', updateGasto);

router.patch('/:item', updateGasto);

router.delete('/:item', deleteGasto);

export default router;