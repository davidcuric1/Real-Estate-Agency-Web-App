import { ZahtevController } from './../controllers/zahtev.controller';
import express from 'express';
//import { ZahtevController } from '../controllers/nekretnina.controller';

const zahtevRouter=express.Router();

zahtevRouter.route('/dodaj_zahtev').post(
    (req,res) => new ZahtevController().dodaj_zahtev(req,res)
)

zahtevRouter.route('/dohvati_zahteve_korisnika').get(
    (req,res) => new ZahtevController().dohvati_zahteve_korisnika(req,res)
)

zahtevRouter.route('/dohvati_zahteve_za_agenciju').get(
    (req,res) => new ZahtevController().dohvati_zahteve_za_agenciju(req,res)
)
zahtevRouter.route('/prihvati_zahtev').post(
    (req,res) => new ZahtevController().prihvati_zahtev(req,res)
)

zahtevRouter.route('/ukloni_odbijene').post(
    (req,res) => new ZahtevController().ukloni_odbijene(req,res)
)
zahtevRouter.route('/prihvati_zahtev_agent').post(
    (req,res) => new ZahtevController().prihvati_zahtev_agent(req,res)
)







export default zahtevRouter;