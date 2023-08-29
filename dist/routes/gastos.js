"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastos_1 = require("../controllers/gastos");
const router = (0, express_1.Router)();
router.get('/', gastos_1.getGasto);
router.get('/:fecha', gastos_1.getGastoByDate);
router.post('/', gastos_1.crearGasto);
exports.default = router;
//# sourceMappingURL=gastos.js.map