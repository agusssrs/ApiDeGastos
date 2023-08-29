"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastosSchema = new mongoose_1.Schema({
    item: {
        type: Number,
        require: true,
        unique: true
    },
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
    pago: {
        type: Boolean,
        required: true,
        default: false
    }
});
const Gastos = (0, mongoose_1.model)('Gastos', GastosSchema);
exports.default = Gastos;
//# sourceMappingURL=gastos.js.map