"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validations = void 0;
class Validations {
    static isValidVolunteerInsert(volunteer) {
        if (!volunteer || !volunteer.lastName1 || !volunteer.lastName2 || !volunteer.names || !volunteer.addressName
            || !volunteer.addressNumExt || !volunteer.suburb || !volunteer.zipCode
            || !volunteer.electorKey || !volunteer.email || !volunteer.phone
            || !volunteer.stateNumber || !volunteer.section || !volunteer.sector
            || !volunteer.typeUser) {
            return false;
        }
        return true;
    }
    static isValidVolunteerValues(volunteer) {
        if (volunteer.idVolunteer && volunteer.idVolunteer.toString().length > this.VOLUNTEER_IDVOLUNTEER_LENGTH
            || volunteer.stateNumber.toString().length > this.VOLUNTEER_STATENUMBER_LENGTH
            || volunteer.section.toString().length > this.VOLUNTEER_SECTION_LENGTH
            || volunteer.typeUser.toString().length > this.VOLUNTEER_TYPEUSER_LENGTH
            || volunteer.lastName1.length > this.VOLUNTEER_LASTNAME1_LENGTH
            || volunteer.lastName2.length > this.VOLUNTEER_LASTNAME2_LENGTH
            || volunteer.names.length > this.VOLUNTEER_NAMES_LENGTH
            || volunteer.addressName.length > this.VOLUNTEER_ADDRESSNAME_LENGTH
            || volunteer.addressNumExt.length > this.VOLUNTEER_ADDRESSNUMEXT_LENGTH
            || (volunteer.addressNumInt && volunteer.addressNumInt.length > this.VOLUNTEER_ADDRESSNUMINT_LENGTH)
            || volunteer.suburb.length > this.VOLUNTEER_SUBURB_LENGTH
            || volunteer.zipCode.length > this.VOLUNTEER_ZIPCODE_LENGTH
            || volunteer.electorKey.length > this.VOLUNTEER_ELECTORKEY_LENGTH
            || volunteer.email.length > this.VOLUNTEER_EMAIL_LENGTH
            || volunteer.phone.length > this.VOLUNTEER_PHONE_LENGTH
            || volunteer.sector.length > this.VOLUNTEER_SECTOR_LENGTH
            || (volunteer.notes && volunteer.notes.length > this.VOLUNTEER_NOTES_LENGTH)) {
            return false;
        }
        return true;
    }
    static isValidLocalDistrictInsert(localDistrict) {
        if (!localDistrict || !localDistrict.localDistrict || !localDistrict.numberLocalDistrict) {
            return false;
        }
        return true;
    }
    static isValidLocalDistrictValues(localDistrict) {
        if (localDistrict.localDistrict.length > this.LOCALDISTRICT_LOCALDISTRICT_LENGTH
            || localDistrict.numberLocalDistrict.toString().length > this.LOCALDISTRICT_NUMBERLOCALDISTRICT_LENGTH) {
            return false;
        }
        return true;
    }
    static isValidMunicipalityInsert(municipality) {
        if (!municipality || !municipality.municipality || !municipality.municipalityNumber) {
            return false;
        }
        return true;
    }
    static isValidMunicipalityValues(municipality) {
        if (municipality.municipality.length > this.MUNICIPALITY_MUNICIPALITY_LENGTH
            || municipality.municipalityNumber.toString().length > this.MUNICIPALITY_MUNICIPALITYNUMBER_LENGTH) {
            return false;
        }
        return true;
    }
    static isValidSectionInsert(section) {
        if (!section || !section.section || !section.numberLocalDistrict || section.numberMunicipality) {
            return false;
        }
        return true;
    }
    static isValidSectionValues(section) {
        if (section.section.toString().length > this.SECTION_SECTION_LENGTH
            || section.numberLocalDistrict.toString().length > this.SECTION_NUMBERLOCALDISRTICT_LENGTH
            || section.numberMunicipality.toString().length > this.SECTION_NUMBERMUNICIPALITY_LENGTH) {
            return false;
        }
        return true;
    }
}
exports.Validations = Validations;
Validations.VOLUNTEER_IDVOLUNTEER_LENGTH = 11;
Validations.VOLUNTEER_LASTNAME1_LENGTH = 50;
Validations.VOLUNTEER_LASTNAME2_LENGTH = 50;
Validations.VOLUNTEER_NAMES_LENGTH = 40;
Validations.VOLUNTEER_ADDRESSNAME_LENGTH = 50;
Validations.VOLUNTEER_ADDRESSNUMEXT_LENGTH = 10;
Validations.VOLUNTEER_ADDRESSNUMINT_LENGTH = 10;
Validations.VOLUNTEER_SUBURB_LENGTH = 40;
Validations.VOLUNTEER_ZIPCODE_LENGTH = 10;
Validations.VOLUNTEER_ELECTORKEY_LENGTH = 30;
Validations.VOLUNTEER_EMAIL_LENGTH = 70;
Validations.VOLUNTEER_PHONE_LENGTH = 30;
Validations.VOLUNTEER_STATENUMBER_LENGTH = 2;
Validations.VOLUNTEER_SECTION_LENGTH = 4;
Validations.VOLUNTEER_SECTOR_LENGTH = 30;
Validations.VOLUNTEER_NOTES_LENGTH = 500;
Validations.VOLUNTEER_TYPEUSER_LENGTH = 11;
Validations.LOCALDISTRICT_NUMBERLOCALDISTRICT_LENGTH = 2;
Validations.LOCALDISTRICT_LOCALDISTRICT_LENGTH = 40;
Validations.MUNICIPALITY_MUNICIPALITYNUMBER_LENGTH = 2;
Validations.MUNICIPALITY_MUNICIPALITY_LENGTH = 40;
Validations.SECTION_SECTION_LENGTH = 4;
Validations.SECTION_NUMBERMUNICIPALITY_LENGTH = 2;
Validations.SECTION_NUMBERLOCALDISRTICT_LENGTH = 2;
Validations.STATE_STATE_LENGTH = 2;
Validations.STATE_STATENUMBER_LENGTH = 40;
