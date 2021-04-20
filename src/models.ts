export interface Volunteer {

    idVolunteer?: number;
    lastName1: string;
    lastName2: string;
    names: string;
    age: string;
    addressName: string;
    addressNumExt: string;
    addressNumInt?: string;
	suburb: string;
    zipCode: string;
    electorKey: string;
    email: string;
    phone: string;
    question1: boolean;
    stateNumber: number;
    section: number;
    sector: string;
    notes?: string;
    typeUser: number;
    imgString?: string
}

export interface LocalDistrict {

    numberLocalDistrict: number;
    localDistrict: string;
}

export interface Municipality {

    municipalityNumber: number;
    municipality: string;
}

export interface Section {

    section: number;
    numberMunicipality: number;
    numberLocalDistrict: number;

}

export interface State {

    stateNumber: number;
    state: string;

}