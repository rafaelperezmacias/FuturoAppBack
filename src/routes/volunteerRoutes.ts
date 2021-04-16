import { Router } from 'express';

import volunteerController from '../controllers/volunteerController';

class VolunteerRoutes {

    router: Router = Router();

    constructor() { this.config(); }

    config(): void {
        this.router.post('/', volunteerController.createVolunteer);
    }
}

export default new VolunteerRoutes().router;
