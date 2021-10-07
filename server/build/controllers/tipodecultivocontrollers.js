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
class Tipocultivocontrollers {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tcultivos = yield database_1.default.query('SELECT * FROM tipo_cultivos');
            res.json(tcultivos);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tipo_cultivos set ?', [req.body]);
            res.json({ message: 'Cultivo agregado agregado' });
            console.log(req.body);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tcultivo = yield database_1.default.query('SELECT * FROM tipo_cultivos WHERE idtipo_cultivos = ?', [id]);
            if (tcultivo.length > 0) {
                return res.json(tcultivo[0]);
            }
            res.status(404).json({ text: "El cultivo no esta en el sistema" });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tipo_cultivos set ? WHERE idtipo_cultivos = ?', [req.body, id]);
            res.json({ message: 'El cultivo fue editado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tipo_cultivos WHERE idtipo_cultivos = ?', [id]);
            res.json({ text: `Cultivo eliminado eliminado ${req.params.id}` });
        });
    }
}
const tipocultivocontrollers = new Tipocultivocontrollers();
exports.default = tipocultivocontrollers;
