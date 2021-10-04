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
const database_1 = __importDefault(require("../database"));
class TerrenosControlers {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const terreno = yield database_1.default.query('SELECT * FROM terrenos');
            console.log(req.body);
            res.json(terreno);
            res.json('Terreno listado');
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO terrenos set ?', [req.body]);
            res.json({ message: 'Terreno agregado' });
            console.log(req.body);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const terreno = yield database_1.default.query('SELECT * FROM terrenos WHERE idterrenos= ?', [id]);
            if (terreno.length > 0) {
                return res.json(terreno[0]);
            }
            res.status(404).json({ text: "Terreno no encontrado" });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE trabajador set ? WHERE trabajadorId = ?', [req.body, id]);
            res.json({ message: 'El trabajador fue editado' });
        });
    }
}
;
const terrenocontrolers = new TerrenosControlers();
exports.default = terrenocontrolers;
