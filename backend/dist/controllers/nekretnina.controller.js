"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekretninaController = void 0;
//import nekretninaRouter from 'src/routes/nekretnina.routes';
const nekretnina_1 = __importDefault(require("../models/nekretnina"));
class NekretninaController {
    constructor() {
        this.nekretnine_po_gradu = (req, res) => {
            let response;
            nekretnina_1.default.aggregate([
                { $match: { odobrena: 1 } },
                { $group: { _id: "$grad", count: { $sum: 1 } } }
            ], (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
            //console.log(response);
            //res.json(response);
        };
        this.dohvati_nekretnine_grada = (req, res) => {
            let grad = req.query.grad;
            nekretnina_1.default.count({ 'grad': grad }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_gradove = (req, res) => {
            nekretnina_1.default.distinct('grad', {}, (err, gradovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(gradovi);
            });
        };
        this.dohvati_stanove_izdavanje = (req, res) => {
            nekretnina_1.default.count({ 'tip': 'Stan', 'status': 'Iznajmljivanje', 'odobrena': 1 }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_kuce_izdavanje = (req, res) => {
            nekretnina_1.default.count({ 'tip': 'Kuca', 'status': 'Iznajmljivanje', 'odobrena': 1 }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_stanove_prodaja = (req, res) => {
            nekretnina_1.default.count({ 'tip': 'Stan', 'status': 'Prodaja', 'odobrena': 1 }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_kuce_prodaja = (req, res) => {
            nekretnina_1.default.count({ 'tip': 'Kuca', 'status': 'Prodaja', 'odobrena': 1 }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_iz_cenovnog_ranga = (req, res) => {
            let donja = req.query.donjaCena;
            let gornja = req.query.gornjaCena;
            console.log(donja);
            console.log(gornja);
            nekretnina_1.default.count({ 'cena': { $gt: donja, $lt: gornja }, 'odobrena': 1 }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.dohvati_sve = (req, res) => {
            nekretnina_1.default.find({ 'odobrena': 1 }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.ukloni_promociju = (req, res) => {
            var ObjectId = require('mongodb').ObjectId;
            nekretnina_1.default.findOneAndUpdate({ _id: ObjectId(req.body.id) }, { $set: { 'promovisana': 0 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.promovisi_nekretninu = (req, res) => {
            var ObjectId = require('mongodb').ObjectId;
            nekretnina_1.default.findOneAndUpdate({ _id: ObjectId(req.body.id) }, { $set: { 'promovisana': 1 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.odobri_nekretninu = (req, res) => {
            var ObjectId = require('mongodb').ObjectId;
            console.log(req.body.id);
            nekretnina_1.default.findOneAndUpdate({ _id: ObjectId(req.body.id) }, { $set: { 'odobrena': 1 } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.prikazi_nepromovisane = (req, res) => {
            nekretnina_1.default.find({ 'promovisana': 0 }, (err, odobrene) => {
                if (err)
                    console.log(err);
                else
                    res.json(odobrene);
            });
        };
        this.prikazi_neodobrene = (req, res) => {
            nekretnina_1.default.find({ 'odobrena': 0 }, (err, odobrene) => {
                if (err)
                    console.log(err);
                else
                    res.json(odobrene);
            });
        };
        this.izmeni_parametre = (req, res) => {
            let nekretnina = new nekretnina_1.default(req.body);
            // let id = new ObjectId("60c204d584f8180decb41789");
            //imam ceo novi objekat nekretnine u req.body
            var ObjectId = require('mongodb').ObjectId;
            let deskriptivni_naziv = req.body.deskriptivni_naziv;
            console.log(deskriptivni_naziv);
            let id = req.body._id;
            nekretnina_1.default.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { 'galerija': req.body.galerija,
                    'deskriptivni_naziv': deskriptivni_naziv, 'grad': req.body.grad, 'opstina': req.body.opstina,
                    'ulica': req.body.ulica, 'broj': req.body.broj, 'tip': req.body.tip, 'spratnost_kuca': req.body.spratnost_kuca,
                    'sprat': req.body.sprat, 'spratnost_zgrada': req.body.spratnost_zgrada, 'kvadratura': req.body.kvadratura, 'broj_soba': req.body.broj_soba,
                    'namestenost': req.body.namestenost, 'status': req.body.status, 'cena': req.body.cena, 'vlasnik': req.body.vlasnik,
                    'promovisana': req.body.promovisana, 'odobrena': req.body.odobrena } }, { new: true }, (err, result) => {
                if (err)
                    res.json({ "message": "Greska" });
                else
                    res.json({ "message": "Uspelo" });
            });
        };
        this.ukloni_nekretninu = (req, res) => {
            let id_nekretnine = req.body.id_nekretnine;
            var ObjectId = require('mongodb').ObjectId;
            nekretnina_1.default.remove({ _id: ObjectId(id_nekretnine) }, (status) => {
                res.json(status);
            });
        };
        this.dodaj_nekretninu = (req, res) => {
            let nekretnina = new nekretnina_1.default(req.body);
            console.log(nekretnina);
            nekretnina.save().then((nekretnina) => {
                console.log(nekretnina);
                res.status(200).json({ 'message': 'nekretnina dodata' });
            }).catch((err) => {
                res.status(200).json({ 'message': 'doslo do greske' });
            });
        };
        this.dohvati_nekretnine_korisnika = (req, res) => {
            let korisnicko = req.query.korisnicko;
            console.log(korisnicko);
            nekretnina_1.default.find({ 'vlasnik': korisnicko, 'odobrena': 1 }, (err, nekretnine) => {
                if (err)
                    console.log(err);
                else
                    res.json(nekretnine);
            });
        };
        this.prikazi_promovisane = (req, res) => {
            nekretnina_1.default.find({ 'promovisana': 1, 'odobrena': 1 }, (err, promovisane) => {
                if (err)
                    console.log(err);
                else
                    res.json(promovisane);
            });
        };
        this.pretraga = (req, res) => {
            let grad = req.query.grad;
            let cenaDonja = req.query.cenaDonja;
            let cenaGornja = req.query.cenaGornja;
            let parametri = req.params;
            /* if(typeof grad == undefined)grad=null;
             if(typeof(cenaDonja) == 'undefined'){cenaDonja=null;console.log("SETOVAO NA NULL");}
             if(typeof(cenaGornja) == 'undefined')cenaGornja=null;*/
            console.log(grad);
            console.log(cenaDonja);
            console.log(cenaGornja);
            if (cenaDonja != -1 && cenaGornja == -1 && grad == '-1') {
                console.log("Usao iako je nulll!");
                nekretnina_1.default.find({ 'cena': { $gt: cenaDonja }, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja == -1 && cenaGornja != -1 && grad == '-1') {
                console.log("Drugi if");
                nekretnina_1.default.find({ 'cena': { $lt: cenaGornja }, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja == -1 && cenaGornja == -1 && grad != '-1') {
                console.log("treci if");
                nekretnina_1.default.find({ 'grad': grad, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja != -1 && cenaGornja != -1 && grad == '-1') {
                console.log("cetvrti if");
                nekretnina_1.default.find({ 'cena': { $gt: cenaDonja, $lt: cenaGornja }, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja != -1 && cenaGornja == -1 && grad != '-1') {
                console.log("peti if");
                nekretnina_1.default.find({ 'cena': { $gt: cenaDonja }, 'grad': grad, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja == -1 && cenaGornja != -1 && grad != '-1') {
                console.log("seesti if");
                nekretnina_1.default.find({ 'cena': { $lt: cenaGornja }, 'grad': grad, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
            if (cenaDonja != -1 && cenaGornja != -1 && grad != '-1') {
                console.log("sedmi if");
                nekretnina_1.default.find({ 'cena': { $gt: cenaDonja, $lt: cenaGornja }, 'grad': grad, 'odobrena': 1 }, (err, rezultat) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(rezultat);
                });
            }
        };
    }
}
exports.NekretninaController = NekretninaController;
//# sourceMappingURL=nekretnina.controller.js.map