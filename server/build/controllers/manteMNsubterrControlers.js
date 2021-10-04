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
class MantenimientoMNsubteControlers {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mantenimiento = yield database_1.default.query('SELECT * FROM mantenimentos_has_subterreno');
            console.log(mantenimiento);
            res.json(mantenimiento);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO mantenimentos_has_subterreno set ?', [req.body]);
            res.json({ message: 'mantenimentos agregado' });
            console.log(req.body);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const mantenimiento = yield database_1.default.query('SELECT * FROM mantenimentos_has_subterreno WHERE idmantenimentos= ?', [id]);
            if (mantenimiento.length > 0) {
                return res.json(mantenimiento[0]);
            }
            else {
                res.status(404).json({ text: "mantenimento no encontrado" });
            }
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE mantenimentos_has_subterreno set ? WHERE idmantenimentos = ?', [req.body, id]);
            res.json({ message: 'El mantenimento fue editado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM mantenimentos_has_subterreno WHERE idmantenimentos = ?', [id]);
            res.json({ text: `mantenimentos eliminado eliminado ${req.params.id}` });
        });
    }
}
const manteniMNsubtcontrolers = new MantenimientoMNsubteControlers();
exports.default = manteniMNsubtcontrolers;
