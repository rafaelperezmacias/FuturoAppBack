"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SectionController {
    getInfo(request, response) {
        const keyInsert = request.params.id;
        if (!keyInsert || keyInsert !== "myKey") {
            return response.json({
                code: 200
            });
        }
        database_1.default.getConnection((error, connection) => {
            if (error) {
                return response.json({
                    code: 201
                });
            }
            let jsonResponse = {};
            let query = 'SELECT * FROM `municipality` ORDER BY municipality.municipalityNumber ASC;';
            database_1.default.query(query, [], (error, result, fields) => {
                if (error) {
                    return response.json({
                        code: 202
                    });
                }
                jsonResponse['municipalities'] = result;
                let query = 'SELECT * FROM `localdistrict` ORDER BY localDistrict.numberLocalDistrict ASC;';
                database_1.default.query(query, [], (error, result, fields) => {
                    if (error) {
                        return response.json({
                            code: 203
                        });
                    }
                    jsonResponse['localDistricts'] = result;
                    let query = 'SELECT * FROM `section` ORDER BY section.section ASC;';
                    database_1.default.query(query, [], (error, result, fields) => {
                        if (error) {
                            return response.json({
                                code: 204
                            });
                        }
                        jsonResponse['sections'] = result;
                        jsonResponse['code'] = 205;
                        return response.json(jsonResponse);
                    });
                });
            });
        });
    }
}
const sectionController = new SectionController();
exports.default = sectionController;
