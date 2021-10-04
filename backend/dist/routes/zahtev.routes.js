"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zahtev_controller_1 = require("./../controllers/zahtev.controller");
const express_1 = __importDefault(require("express"));
//import { ZahtevController } from '../controllers/nekretnina.controller';
const zahtevRouter = express_1.default.Router();
zahtevRouter.route('/dodaj_zahtev').post((req, res) => new zahtev_controller_1.ZahtevController().dodaj_zahtev(req, res));
zahtevRouter.route('/dohvati_zahteve_korisnika').get((req, res) => new zahtev_controller_1.ZahtevController().dohvati_zahteve_korisnika(req, res));
zahtevRouter.route('/dohvati_zahteve_za_agenciju').get((req, res) => new zahtev_controller_1.ZahtevController().dohvati_zahteve_za_agenciju(req, res));
zahtevRouter.route('/prihvati_zahtev').post((req, res) => new zahtev_controller_1.ZahtevController().prihvati_zahtev(req, res));
zahtevRouter.route('/ukloni_odbijene').post((req, res) => new zahtev_controller_1.ZahtevController().ukloni_odbijene(req, res));
zahtevRouter.route('/prihvati_zahtev_agent').post((req, res) => new zahtev_controller_1.ZahtevController().prihvati_zahtev_agent(req, res));
exports.default = zahtevRouter;
//# sourceMappingURL=zahtev.routes.js.map