import { json, Request, Response } from 'express';
import { DistritoLocal, Municipio, Seccion } from '../models';

import db from '../database';

class SectionController {

    getInfo(request: Request, response: Response) {

        db.getConnection( (error, connection) => {
            if (error) {
                return response.json({
                    code: 200
                });
            }

            let jsonResponse: any = { };

            let query = 'SELECT * FROM `municipios` ORDER BY municipios.numero ASC;';
            db.query( query, [], (error, result: Municipio[], fields) => {
                if (error) {
                    return response.json({
                        code: 201
                    });
                }

                jsonResponse['municipios'] = result;
                
                let query = 'SELECT * FROM `distritos_locales` ORDER BY distritos_locales.numero ASC;';
                db.query( query, [], (error, result: DistritoLocal[], fields) => {
                    if (error) {
                        return response.json({
                            code: 202
                        });
                    }

                    jsonResponse['distritos_locales'] = result;

                    let query = 'SELECT * FROM `secciones` ORDER BY secciones.numero ASC;';
                    db.query( query, [], (error, result: Seccion[], fields) => {
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
export default sectionController;