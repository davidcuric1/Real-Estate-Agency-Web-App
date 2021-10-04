"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/izmeni_parametre').post((req, res) => new korisnik_controller_1.KorisnikController().izmeni_parametre(req, res));
korisnikRouter.route('/odobri_korisnika').post((req, res) => new korisnik_controller_1.KorisnikController().odobri_korisnika(req, res));
korisnikRouter.route('/dohvati_neodobrene').get((req, res) => new korisnik_controller_1.KorisnikController().dohvati_neodobrene(req, res));
korisnikRouter.route('/ukloni_korisnika').post((req, res) => new korisnik_controller_1.KorisnikController().ukloni_korisnika(req, res));
korisnikRouter.route('/dohvati_korisnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvati_korsinike(req, res));
korisnikRouter.route('/prijava').post((req, res) => new korisnik_controller_1.KorisnikController().prijava(req, res));
korisnikRouter.route('/registracija').post((req, res) => new korisnik_controller_1.KorisnikController().registracija(req, res));
korisnikRouter.route('/promena_lozinke').post((req, res) => new korisnik_controller_1.KorisnikController().promena_lozinke(req, res));
korisnikRouter.route('/proveri_korisnicko').post((req, res) => new korisnik_controller_1.KorisnikController().proveri_korisnicko(req, res));
korisnikRouter.route('/izmeni_parametar').post((req, res) => new korisnik_controller_1.KorisnikController().izmeni_parametar(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map