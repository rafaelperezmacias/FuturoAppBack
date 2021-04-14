"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SectionController {
    getInfo(request, response) {
        database_1.default.getConnection((error, connection) => {
            if (error) {
                return response.json({
                    code: 200
                });
            }
            let jsonResponse = {};
            let query = 'SELECT * FROM `municipios` ORDER BY municipios.numero ASC;';
            database_1.default.query(query, [], (error, result, fields) => {
                if (error) {
                    return response.json({
                        code: 201
                    });
                }
                jsonResponse['municipios'] = result;
                let query = 'SELECT * FROM `distritos_locales` ORDER BY distritos_locales.numero ASC;';
                database_1.default.query(query, [], (error, result, fields) => {
                    if (error) {
                        return response.json({
                            code: 202
                        });
                    }
                    jsonResponse['distritos_locales'] = result;
                    let query = 'SELECT * FROM `secciones` ORDER BY secciones.numero ASC;';
                    database_1.default.query(query, [], (error, result, fields) => {
                        if (error) {
                            return response.json({
                                code: 203
                            });
                        }
                        jsonResponse['secciones'] = result;
                        return response.json(jsonResponse);
                    });
                });
            });
        });
    }
}
const sectionController = new SectionController();
exports.default = sectionController;
