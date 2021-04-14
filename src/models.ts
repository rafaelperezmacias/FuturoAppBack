export interface Volunteer {

    id_voluntario?: number;
    nombres: string;
    apaterno: string;
    amaterno: string;
    
}

export interface DistritoLocal {

    numero: number;
    nombre: string;
}

export interface Municipio {

    numero: number;
    nombre: string;
}

export interface Seccion {

    numero: number;
    id_municipio: number;
    id_distrito_local: number;

}