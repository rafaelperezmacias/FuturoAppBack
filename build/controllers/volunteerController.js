"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validations_1 = require("../validations");
const fs_1 = __importDefault(require("fs"));
const database_1 = __importDefault(require("../database"));
class VolunteerController {
    createVolunteer(request, response) {
        const volunteer = request.body.volunteer || {};
        const keyInsert = request.body.key;
        let buff = Buffer.from(volunteer.imgString || "", "base64");
        fs_1.default.writeFile('./img/credenciales/' + volunteer.electorKey + ".png", buff, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        return response.json({
            code: 100,
            volunteer: volunteer
        });
        if (!keyInsert || keyInsert !== "myKey") {
            return response.json({
                code: 100,
                volunteer: volunteer
            });
        }
        if (!validations_1.Validations.isValidVolunteerInsert(volunteer)) {
            return response.json({
                code: 101,
                volunteer: volunteer
            });
        }
        if (!validations_1.Validations.isValidVolunteerValues(volunteer)) {
            return response.json({
                code: 102,
                volunteer: volunteer
            });
        }
        database_1.default.getConnection((error, connection) => {
            if (error) {
                return response.json({
                    code: 103,
                    volunteer: volunteer
                });
            }
            connection.beginTransaction((error) => {
                if (error) {
                    return response.json({
                        code: 104,
                        volunteer: volunteer
                    });
                }
                const query = 'INSERT INTO `volunteer`(`lastName1`, `lastName2`, `names`, `addressName`, `addressNumExt`, `addressNumInt`,' +
                    '`suburb`, `zipCode`, `electorKey`, `email`, `phone`, `stateNumber`, `section`, `sector`, `notes`, `typeUser`, `imgString`)' +
                    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                const params = [
                    volunteer.lastName1,
                    volunteer.lastName2,
                    volunteer.names,
                    volunteer.addressName,
                    volunteer.addressNumExt,
                    volunteer.addressNumInt,
                    volunteer.suburb,
                    volunteer.zipCode,
                    volunteer.electorKey,
                    volunteer.email,
                    volunteer.phone,
                    volunteer.stateNumber,
                    volunteer.section,
                    volunteer.sector,
                    volunteer.notes,
                    volunteer.typeUser,
                    volunteer.imgString
                ];
                database_1.default.query(query, params, (error, result, fields) => {
                    if (error) {
                        return connection.rollback(() => {
                            return response.json({
                                code: 105,
                                volunteer: volunteer
                            });
                        });
                    }
                    volunteer.idVolunteer = result.insertId;
                    connection.commit((error) => {
                        if (error) {
                            return connection.rollback(() => {
                                return response.json({
                                    code: 106,
                                    volunteer: volunteer
                                });
                            });
                        }
                        return response.json({
                            code: 110,
                            id_voluntario: volunteer.idVolunteer,
                            volunteer: volunteer
                        });
                    });
                });
            });
        });
    }
}
const volunteerController = new VolunteerController();
exports.default = volunteerController;
