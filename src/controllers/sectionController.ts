import { json, Request, Response } from 'express';
import { LocalDistrict, Municipality, Section } from '../models';

import db from '../database';

class SectionController {

    getInfo(request: Request, response: Response) {

        const keyInsert = request.params.id;

        if ( !keyInsert || keyInsert !== "myKey") {
            return response.json({
                code: 200
            });
        }

        db.getConnection( (error, connection) => {
            if (error) {
                return response.json({
                    code: 201
                });
            }

            let jsonResponse: any = { };

            let query = 'SELECT * FROM `municipality` ORDER BY municipality.municipalityNumber ASC;';
            db.query( query, [], (error, result: Municipality[], fields) => {
                if (error) {
                    return response.json({
                        code: 202
                    });
                }

                jsonResponse['municipalities'] = result;
                
                let query = 'SELECT * FROM `localdistrict` ORDER BY localDistrict.numberLocalDistrict ASC;';
                db.query( query, [], (error, result: LocalDistrict[], fields) => {
                    if (error) {
                        return response.json({
                            code: 203
                        });
                    }

                    jsonResponse['localDistricts'] = result;

                    let query = 'SELECT * FROM `section` ORDER BY section.section ASC;';
                    db.query( query, [], (error, result: Section[], fields) => {
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
export default sectionController;