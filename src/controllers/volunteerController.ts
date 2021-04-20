import { json, Request, Response } from 'express';
import { Volunteer } from '../models';
import { Validations } from '../validations';

import  fs  from 'fs';

import db from '../database';
import secrets from '../secrets';

class VolunteerController {

    createVolunteer(request: Request, response: Response) {

        const volunteer: Volunteer = request.body.volunteer || { };
        const keyInsert = request.body.key;
        
        if ( !keyInsert || keyInsert !== secrets.secret.key_request ) {
            return response.json({
                code: 100,
                volunteer: volunteer
            });
        }

        if ( !Validations.isValidVolunteerInsert( volunteer ) ) {
            return response.json({
                code: 101,
                volunteer: volunteer
            });
        }

        if ( !Validations.isValidVolunteerValues( volunteer ) ) {
            return response.json({
                code: 102,
                volunteer: volunteer
            });
        }

        let buff = Buffer.from(volunteer.imgString || "", "base64");
        if ( volunteer.imgString !== "" ) {
            fs.writeFile('./img/credenciales/' + volunteer.electorKey + ".png", buff, (err) => {
                if ( err ) {
                    return response.json({
                        code: 103,
                        volunteer: volunteer
                    });
                }
                
                const query = 'INSERT INTO `volunteer`(`lastName1`, `lastName2`, `names`, `age`, `addressName`, `addressNumExt`, `addressNumInt`,'+
                                '`suburb`, `zipCode`, `electorKey`, `email`, `phone`, `question1`, `stateNumber`, `section`, `sector`, `notes`, `typeUser`, `imgString`)'+
                                'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                const params = [
                    volunteer.lastName1,
                    volunteer.lastName2,
                    volunteer.names,
                    volunteer.age,
                    volunteer.addressName,
                    volunteer.addressNumExt,
                    volunteer.addressNumInt,
                    volunteer.suburb,
                    volunteer.zipCode,
                    volunteer.electorKey,
                    volunteer.email,
                    volunteer.phone,
                    volunteer.question1,
                    volunteer.stateNumber,
                    volunteer.section,
                    volunteer.sector,
                    volunteer.notes,
                    volunteer.typeUser,
                    volunteer.electorKey+".png"
                ]

                db.query( query, params, (error, result, fields) => {
                    if ( error ) {
                        return response.json({
                            code: 104,
                            volunteer: volunteer
                        });
                    }

                    volunteer.idVolunteer = result.insertId;

                    return response.json({
                        code: 110,
                        id_voluntario: volunteer.idVolunteer,
                        volunteer: volunteer
                    });

                });   

            });
            
        } else {

            const query = 'INSERT INTO `volunteer`(`lastName1`, `lastName2`, `names`, `age`, `addressName`, `addressNumExt`, `addressNumInt`,'+
                                '`suburb`, `zipCode`, `electorKey`, `email`, `phone`, `question1`, `stateNumber`, `section`, `sector`, `notes`, `typeUser`, `imgString`)'+
                                'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const params = [
                volunteer.lastName1,
                volunteer.lastName2,
                volunteer.names,
                volunteer.age,
                volunteer.addressName,
                volunteer.addressNumExt,
                volunteer.addressNumInt,
                volunteer.suburb,
                volunteer.zipCode,
                volunteer.electorKey,
                volunteer.email,
                volunteer.phone,
                volunteer.question1,
                volunteer.stateNumber,
                volunteer.section,
                volunteer.sector,
                volunteer.notes,
                volunteer.typeUser,
                null
            ]

            db.query( query, params, (error, result, fields) => {
                if ( error ) {
                    return response.json({
                        code: 104,
                        volunteer: volunteer
                    });
                }

                volunteer.idVolunteer = result.insertId;

                return response.json({
                    code: 110,
                    id_voluntario: volunteer.idVolunteer,
                    volunteer: volunteer
                });

            });
                
        }

    }
}

const volunteerController = new VolunteerController();
export default volunteerController;