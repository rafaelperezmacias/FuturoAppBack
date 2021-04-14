import { Router } from 'express';

import sectionController from '../controllers/sectionController';

class SectionRoutes {

    router: Router = Router();

    constructor() { this.config(); }

    config(): void {
        this.router.get('/appSetup', sectionController.getInfo);
    }
}

export default new SectionRoutes().router;
