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
class SubterrenosControlers {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const terreno = yield database_1.default.query('SELECT * FROM subterreno');
            console.log(req.body);
            res.json(terreno);
            res.json('Subterreno listado');
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO subterreno set ?', [req.body]);
            res.json({ message: 'Suberreno agregado' });
            console.log(req.body);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const terreno = yield database_1.default.query('SELECT * FROM subterreno WHERE idsubterreno = ?', [id]);
            if (terreno.length > 0) {
                return res.json(terreno[0]);
            }
            else {
                res.status(404).json({ text: "Subterreno no encontrado" });
            }
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE subterreno set ? WHERE idsubterreno  = ?', [req.body, id]);
            res.json({ message: 'El Subterreno fue editado' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM subterreno WHERE idsubterreno = ?', [id]);
            res.json({ text: `Subterreno eliminado eliminado ${req.params.id}` });
        });
    }
}
;
const subterrenocontrolers = new SubterrenosControlers();
exports.default = subterrenocontrolers;
