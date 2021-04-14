import { Volunteer } from './models';

export class Validations {

    static VOLUNTARIO_ID_LENGTH           = 11;
    static VOLUNTARIO_NOMBRES_LENGTH      = 45;
    static VOLUNTARIO_APATERNO_LENGTH     = 25;
    static VOLUNTARIO_AMATERNO_LENGTH     = 25;

    static isValidVolunteerInsert( volunteer: Volunteer ) : boolean {

        if ( !volunteer || !volunteer.nombres || !volunteer.amaterno || !volunteer.apaterno ) {
            return false;
        }

        return true;
    }

    static isValidVolunteerValues( volunteer: Volunteer ) : boolean {

        if ( volunteer.id_voluntario && volunteer.id_voluntario.toString().length > this.VOLUNTARIO_ID_LENGTH ) {
            return false;
        }

        if ( volunteer.nombres.length > this.VOLUNTARIO_NOMBRES_LENGTH 
            || volunteer.apaterno.length > this.VOLUNTARIO_AMATERNO_LENGTH
            || volunteer.amaterno.length > this.VOLUNTARIO_AMATERNO_LENGTH ) {
            return false;
        }

        return true;
    }

}