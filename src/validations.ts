import { LocalDistrict, Municipality, Section, Volunteer } from './models';

export class Validations {

    static VOLUNTEER_IDVOLUNTEER_LENGTH             = 11;
    static VOLUNTEER_LASTNAME1_LENGTH               = 50;
    static VOLUNTEER_LASTNAME2_LENGTH               = 50;
    static VOLUNTEER_NAMES_LENGTH                   = 40;
    static VOLUNTEER_ADDRESSNAME_LENGTH             = 50;
    static VOLUNTEER_ADDRESSNUMEXT_LENGTH           = 10;
    static VOLUNTEER_ADDRESSNUMINT_LENGTH           = 10;
    static VOLUNTEER_SUBURB_LENGTH                  = 40;
    static VOLUNTEER_ZIPCODE_LENGTH                 = 10;
    static VOLUNTEER_ELECTORKEY_LENGTH              = 30;
    static VOLUNTEER_EMAIL_LENGTH                   = 70;
    static VOLUNTEER_PHONE_LENGTH                   = 30;
    static VOLUNTEER_STATENUMBER_LENGTH             = 2;
    static VOLUNTEER_SECTION_LENGTH                 = 4;
    static VOLUNTEER_SECTOR_LENGTH                  = 30;
    static VOLUNTEER_NOTES_LENGTH                   = 500;
    static VOLUNTEER_TYPEUSER_LENGTH                = 11;

    static LOCALDISTRICT_NUMBERLOCALDISTRICT_LENGTH = 2;
    static LOCALDISTRICT_LOCALDISTRICT_LENGTH       = 40;

    static MUNICIPALITY_MUNICIPALITYNUMBER_LENGTH   = 2;
    static MUNICIPALITY_MUNICIPALITY_LENGTH         = 40;

    static SECTION_SECTION_LENGTH                   = 4;
    static SECTION_NUMBERMUNICIPALITY_LENGTH        = 2;
    static SECTION_NUMBERLOCALDISRTICT_LENGTH       = 2;

    static STATE_STATE_LENGTH                       = 2;
    static STATE_STATENUMBER_LENGTH                 = 40;

    static isValidVolunteerInsert( volunteer: Volunteer ) : boolean {

        if ( !volunteer || !volunteer.lastName1 || !volunteer.lastName2 || !volunteer.names || !volunteer.addressName
            || !volunteer.addressNumExt || !volunteer.suburb  
            || !volunteer.electorKey ||  !volunteer.phone 
            || !volunteer.stateNumber || !volunteer.section 
            || !volunteer.typeUser ) {
            return false;
        }

        return true;
    }

    static isValidVolunteerValues( volunteer: Volunteer ) : boolean {

        if ( volunteer.idVolunteer && volunteer.idVolunteer.toString().length > this.VOLUNTEER_IDVOLUNTEER_LENGTH
            || volunteer.stateNumber.toString().length > this.VOLUNTEER_STATENUMBER_LENGTH
            || volunteer.section.toString().length > this.VOLUNTEER_SECTION_LENGTH
            || volunteer.typeUser.toString().length > this.VOLUNTEER_TYPEUSER_LENGTH
            || volunteer.lastName1.length > this.VOLUNTEER_LASTNAME1_LENGTH
            || volunteer.lastName2.length > this.VOLUNTEER_LASTNAME2_LENGTH
            || volunteer.names.length > this.VOLUNTEER_NAMES_LENGTH
            || volunteer.addressName.length > this.VOLUNTEER_ADDRESSNAME_LENGTH
            || volunteer.addressNumExt.length > this.VOLUNTEER_ADDRESSNUMEXT_LENGTH
            || ( volunteer.addressNumInt && volunteer.addressNumInt.length > this.VOLUNTEER_ADDRESSNUMINT_LENGTH )
            || volunteer.suburb.length > this.VOLUNTEER_SUBURB_LENGTH
            || ( volunteer.zipCode && volunteer.zipCode.length > this.VOLUNTEER_ZIPCODE_LENGTH )
            || volunteer.electorKey.length > this.VOLUNTEER_ELECTORKEY_LENGTH
            || ( volunteer.email && volunteer.email.length > this.VOLUNTEER_EMAIL_LENGTH )
            || volunteer.phone.length > this.VOLUNTEER_PHONE_LENGTH
            || ( volunteer.sector && volunteer.sector.length > this.VOLUNTEER_SECTOR_LENGTH )
            || ( volunteer.notes && volunteer.notes.length > this.VOLUNTEER_NOTES_LENGTH) ) {
            return false;
        }

        return true;
    }

    static isValidLocalDistrictInsert( localDistrict: LocalDistrict ) : boolean {

        if ( !localDistrict || !localDistrict.localDistrict || !localDistrict.numberLocalDistrict ) {
            return false;
        }

        return true;
    }

    static isValidLocalDistrictValues( localDistrict: LocalDistrict ) : boolean {

        if ( localDistrict.localDistrict.length > this.LOCALDISTRICT_LOCALDISTRICT_LENGTH 
            || localDistrict.numberLocalDistrict.toString().length > this.LOCALDISTRICT_NUMBERLOCALDISTRICT_LENGTH ) {
            return false;
        }

        return true;
    }

    static isValidMunicipalityInsert( municipality: Municipality ) : boolean {

        if ( !municipality || !municipality.municipality || !municipality.municipalityNumber ) {
            return false;
        }

        return true;
    }

    static isValidMunicipalityValues( municipality: Municipality ) : boolean {

        if ( municipality.municipality.length > this.MUNICIPALITY_MUNICIPALITY_LENGTH 
            || municipality.municipalityNumber.toString().length > this.MUNICIPALITY_MUNICIPALITYNUMBER_LENGTH ) {
            return false;
        }

        return true;
    }

    static isValidSectionInsert( section: Section ) : boolean {

        if ( !section || !section.section || !section.numberLocalDistrict || section.numberMunicipality ) {
            return false;
        }

        return true;
    }

    static isValidSectionValues( section: Section ) : boolean {

        if ( section.section.toString().length > this.SECTION_SECTION_LENGTH 
            || section.numberLocalDistrict.toString().length > this.SECTION_NUMBERLOCALDISRTICT_LENGTH
            || section.numberMunicipality.toString().length > this.SECTION_NUMBERMUNICIPALITY_LENGTH ) {
            return false;
        }

        return true;
    }

}