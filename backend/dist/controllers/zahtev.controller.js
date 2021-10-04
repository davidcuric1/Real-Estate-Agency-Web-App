"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZahtevController = void 0;
const zahtev_1 = __importDefault(require("../models/zahtev"));
class ZahtevController {
    constructor() {
        /* dohvati_zahteve_za_odobravanje = (req:express.Request, res:express.Response) =>{
             Zahtev.find({'odobren': 0},(err,zahtevi)=>{
                 if(err)console.log(err);
                 else res.json(zahtevi);
             })
         }*/
        this.dohvati_zahteve_za_agenciju = (req, res) => {
            zahtev_1.default.find({ 'odobrenAgencija': 0, 'odobrenVlasnik': 1 }, (err, zahtevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(zahtevi);
            });
        };
        this.dohvati_zahteve_korisnika = (req, res) => {
            let korisnicko = req.query.korisnicko;
            console.log(korisnicko);
            zahtev_1.default.find({ 'vlasnik': korisnicko, 'odobrenVlasnik': 0 }, (err, zahtevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(zahtevi);
            });
        };
        this.dodaj_zahtev = (req, res) => {
            let zahtev = new zahtev_1.default(req.body);
            console.log(zahtev);
            zahtev.save().then((zahtev) => {
                console.log(zahtev);
                res.status(200).json({ 'message': 'zahtev dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.prihvati_zahtev = (req, res) => {
            let id_zahteva = req.body.id_zahteva;
            let id_nekretnine = req.body.id_nekretnine;
            var ObjectId = require('mongodb').ObjectId;
            zahtev_1.default.findOneAndUpdate({ _id: ObjectId(id_zahteva) }, { $set: { 'odobrenVlasnik': 1 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.prihvati_zahtev_agent = (req, res) => {
            let id_zahteva = req.body.id_zahteva;
            let id_nekretnine = req.body.id_nekretnine;
            console.log(id_zahteva);
            var ObjectId = require('mongodb').ObjectId;
            zahtev_1.default.findOneAndUpdate({ _id: ObjectId(id_zahteva) }, { $set: { 'odobrenAgencija': 1 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.ukloni_odbijene = (req, res) => {
            let id_zahteva = req.body.id_zahteva;
            let id_nekretnine = req.body.id_nekretnine;
            var ObjectId = require('mongodb').ObjectId;
            zahtev_1.default.remove({ 'id_nekretnine': id_nekretnine, _id: { $ne: ObjectId(id_zahteva) } }, (status) => {
                res.json(status);
            });
        };
    }
}
exports.ZahtevController = ZahtevController;
//# sourceMappingURL=zahtev.controller.js.map