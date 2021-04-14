import { Router } from 'express';

import volunteerController from '../controllers/volunteerController';

class VolunteerRoutes {

    router: Router = Router();

    constructor() { this.config(); }

    config(): void {
        this.router.post('/', volunteerController.createVolunteer);
        this.router.get('/', volunteerController.getVolunteers)
        // this.router.get('/:id', directorController.getDirector);
        // this.router.get('/', directorController.getDirectors);
        // this.router.put('/:id', directorController.updateDirector);
        // this.router.delete('/:id', directorController.deleteDirector);
    }
}

export default new VolunteerRoutes().router;
