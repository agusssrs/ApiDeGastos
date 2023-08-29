"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastosSchema = new mongoose_1.Schema({
    fecha: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: false
    }
});
const Gastos = (0, mongoose_1.model)('Gastos', GastosSchema);
exports.default = Gastos;
//# sourceMappingURL=gastos.js.map