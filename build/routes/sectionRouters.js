"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sectionController_1 = __importDefault(require("../controllers/sectionController"));
class SectionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/appSetup/:id', sectionController_1.default.getInfo);
    }
}
exports.default = new SectionRoutes().router;
