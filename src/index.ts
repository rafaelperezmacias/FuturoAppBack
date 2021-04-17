import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import VolunteerRoutes from './routes/volunteerRoutes';
import SectionRouters from './routes/sectionRouters';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json({limit:'50mb'}));
        this.app.use(express.urlencoded({limit:'50mb'}));
    }

    routes(): void {
        try {
            this.app.use('/api/v1/volunteer', VolunteerRoutes);
            this.app.use('/api/v1/section', SectionRouters);
        } catch ( error ) {
            console.log(error);
        }
    }

    start() {
        let server = this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
        server.setTimeout(5000);
    }
}

const server = new Server();
server.start();

export default Server;