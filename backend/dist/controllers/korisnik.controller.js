"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.izmeni_parametre = (req, res) => {
            let korisnik = new korisnik_1.default(req.body);
            // let id = new ObjectId("60c204d584f8180decb41789");
            //imam ceo novi objekat nekretnine u req.body
            korisnik_1.default.findOneAndUpdate({ 'korisnicko': req.body.korisnicko }, { $set: { 'ime': req.body.ime,
                    'prezime': req.body.prezime, 'lozinka': req.body.lozinka, 'slika': req.body.slika,
                    'email': req.body.email, 'grad': req.body.grad, 'drzava': req.body.drzava, 'tip': req.body.tip } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.odobri_korisnika = (req, res) => {
            let korisnicko = req.body.korisnicko;
            korisnik_1.default.findOneAndUpdate({ 'korisnicko': korisnicko }, { $set: { 'odobren': 1 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.ukloni_korisnika = (req, res) => {
            let korisnicko = req.body.korisnicko;
            console.log(korisnicko);
            korisnik_1.default.remove({ 'korisnicko': korisnicko }, (status) => {
                res.json(status);
            });
        };
        this.izmeni_parametar = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let parametar = req.body.parametar;
            let vrednost = req.body.vrednost;
            console.log(parametar);
            console.log(korisnicko);
            console.log(vrednost);
            if (parametar == 'grad') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'grad': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'ime') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'ime': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'prezime') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'prezime': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'e-mail') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'e-mail': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'drzava') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'drzava': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'slika') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'slika': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
            else if (parametar == 'tip') {
                korisnik_1.default.findOne({ 'korisnicko': korisnicko }).update({ 'tip': vrednost }, (err, kor) => {
                    if (err)
                        res.status(400).json({ 'message': 'doslo je do greske' });
                    else
                        res.status(200).json({ 'message': 'ok' });
                });
            }
        };
        this.proveri_korisnicko = (req, res) => {
            let korisnicko = req.body.korisnicko;
            console.log(korisnicko);
            korisnik_1.default.findOne({ 'korisnicko': korisnicko }, (err, korisnik) => {
                if (korisnik)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.prijava = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (err, korisnik) => {
                console.log();
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.registracija = (req, res) => {
            let korisnik = new korisnik_1.default(req.body);
            console.log(" consossssssssssle.log(req.body);");
            console.log(req.body);
            korisnik.save().then((korisnik) => {
                res.status(200).json({ 'message': 'korisnik dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.promena_lozinke = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            let nova_lozinka = req.body.nova_lozinka;
            korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }).update({ "lozinka": nova_lozinka }, (err, kor) => {
                if (err)
                    res.status(400).json({ 'message': 'doslo je do greske' });
                else
                    res.status(200).json({ 'message': 'lozinka promenjena' });
            });
        };
        this.dohvati_korsinike = (req, res) => {
            korisnik_1.default.find({ 'odobren': 1, 'tip': 1 }, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
        this.dohvati_neodobrene = (req, res) => {
            korisnik_1.default.find({ 'odobren': 0, 'tip': 1 }, (err, korisnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnici);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map