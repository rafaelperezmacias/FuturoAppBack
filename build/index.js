"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const volunteerRoutes_1 = __importDefault(require("./routes/volunteerRoutes"));
const sectionRouters_1 = __importDefault(require("./routes/sectionRouters"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ limit: '50mb' }));
    }
    routes() {
        try {
            this.app.use('/api/v1/volunteer', volunteerRoutes_1.default);
            this.app.use('/api/v1/section', sectionRouters_1.default);
        }
        catch (error) {
            console.log(error);
        }
        this.app.use((err, req, res, next) => {
            console.log(err);
        });
    }
    start() {
        let server = this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
        server.setTimeout(10000);
    }
}
const server = new Server();
server.start();
exports.default = Server;
