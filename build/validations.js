"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validations = void 0;
class Validations {
    static isValidVolunteerInsert(volunteer) {
        if (!volunteer || !volunteer.nombres || !volunteer.amaterno || !volunteer.apaterno) {
            return false;
        }
        return true;
    }
    static isValidVolunteerValues(volunteer) {
        if (volunteer.id_voluntario && volunteer.id_voluntario.toString().length > this.VOLUNTARIO_ID_LENGTH) {
            return false;
        }
        if (volunteer.nombres.length > this.VOLUNTARIO_NOMBRES_LENGTH
            || volunteer.apaterno.length > this.VOLUNTARIO_AMATERNO_LENGTH
            || volunteer.amaterno.length > this.VOLUNTARIO_AMATERNO_LENGTH) {
            return false;
        }
        return true;
    }
}
exports.Validations = Validations;
Validations.VOLUNTARIO_ID_LENGTH = 11;
Validations.VOLUNTARIO_NOMBRES_LENGTH = 45;
Validations.VOLUNTARIO_APATERNO_LENGTH = 25;
Validations.VOLUNTARIO_AMATERNO_LENGTH = 25;
