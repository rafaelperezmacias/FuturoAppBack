import { json, Request, Response } from 'express';
import { Volunteer } from '../models';
import { Validations } from '../validations';

import db from '../database';

class VolunteerController {

    createVolunteer(request: Request, response: Response) {

        const volunteer: Volunteer = request.body || { };

        // const id_volunteer = request.params.id;

        if ( !Validations.isValidVolunteerInsert( volunteer ) ) {
            return response.json({
                code: 100
            });
        }

        if ( !Validations.isValidVolunteerValues( volunteer ) ) {
            return response.json({
                code: 101
            });
        }

        db.getConnection( (error, connection) => {
            if (error) {
                return response.json({
                    code: 102
                });
            }

            connection.beginTransaction( (error) => {
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
                ]

                db.query( query, params, (error, result, fields) => {
                    
                    if ( error ) {
                        return connection.rollback( () => {
                            return response.json({
                                code: 103
                            });
                        });
                    }

                    volunteer.id_voluntario = result.insertId;

                    connection.commit( (error) => {
                        if (error) {
                            return connection.rollback(() =>{
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

    getVolunteers(request: Request, response: Response) {
        return response.json({
            "Hola": "hola"
        })
    }

}

const volunteerController = new VolunteerController();
export default volunteerController;