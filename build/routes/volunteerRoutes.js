"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const volunteerController_1 = __importDefault(require("../controllers/volunteerController"));
class VolunteerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', volunteerController_1.default.createVolunteer);
        this.router.get('/', volunteerController_1.default.getVolunteers);
        // this.router.get('/:id', directorController.getDirector);
        // this.router.get('/', directorController.getDirectors);
        // this.router.put('/:id', directorController.updateDirector);
        // this.router.delete('/:id', directorController.deleteDirector);
    }
}
exports.default = new VolunteerRoutes().router;
