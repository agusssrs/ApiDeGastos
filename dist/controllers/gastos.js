"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearGasto = exports.getGastoByDate = exports.getGasto = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const getGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condition = {
        estado: true
    };
    const gasto = yield gastos_1.default.find(condition);
    res.json({
        gasto
    });
});
exports.getGasto = getGasto;
const getGastoByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha } = req.params;
    const gasto = yield gastos_1.default.find({ fecha });
    res.json({
        gasto
    });
});
exports.getGastoByDate = getGastoByDate;
const crearGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastosData = req.body;
    const gasto = new gastos_1.default(gastosData);
    yield gasto.save();
    res.json({
        msg: "Tu gasto se guardo correctamente",
        gasto
    });
});
exports.crearGasto = crearGasto;
//# sourceMappingURL=gastos.js.map