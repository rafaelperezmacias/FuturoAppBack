"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validations_1 = require("../validations");
const database_1 = __importDefault(require("../database"));
class VolunteerController {
    createVolunteer(request, response) {
        const volunteer = request.body || {};
        // const id_volunteer = request.params.id;
        if (!validations_1.Validations.isValidVolunteerInsert(volunteer)) {
            return response.json({
                code: 100
            });
        }
        if (!validations_1.Validations.isValidVolunteerValues(volunteer)) {
            return response.json({
                code: 101
            });
        }
        database_1.default.getConnection((error, connection) => {
            if (error) {
                return response.json({
                    code: 102
                });
            }
            connection.beginTransaction((error) => {
                if (error) {
                    return response.json({
                        code: 101
                    });
                }
                const query = 'INSERT INTO `volunteer`(`nombres`, `apaterno`, `amaterno`) VALUES (?, ?, ?)';
                const params = [
                    volunteer.nombres,
                    volunteer.apaterno,
                    volunteer.amaterno
                ];
                database_1.default.query(query, params, (error, result, fields) => {
                    if (error) {
                        return connection.rollback(() => {
                            return response.json({
                                code: 103
                            });
                        });
                    }
                    volunteer.id_voluntario = result.insertId;
                    connection.commit((error) => {
                        if (error) {
                            return connection.rollback(() => {
                                return response.json({
                                    code: 104
                                });
                            });
                        }
                        return response.json({
                            code: 105,
                            id_voluntario: volunteer.id_voluntario
                        });
                    });
                });
            });
        });
    }
    getVolunteers(request, response) {
        return response.json({
            "Hola": "hola"
        });
    }
}
const volunteerController = new VolunteerController();
exports.default = volunteerController;
