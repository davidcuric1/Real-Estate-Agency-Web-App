import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter=express.Router();

korisnikRouter.route('/izmeni_parametre').post(
    (req,res) => new  KorisnikController().izmeni_parametre(req,res)
)

korisnikRouter.route('/odobri_korisnika').post(
    (req,res) => new  KorisnikController().odobri_korisnika(req,res)
)

korisnikRouter.route('/dohvati_neodobrene').get(
    (req,res) => new  KorisnikController().dohvati_neodobrene(req,res)

)

korisnikRouter.route('/ukloni_korisnika').post(
    (req,res)=> new KorisnikController().ukloni_korisnika(req,res)

    
)


korisnikRouter.route('/dohvati_korisnike').get(
    (req,res) => new  KorisnikController().dohvati_korsinike(req,res)

)

korisnikRouter.route('/prijava').post(
    (req,res)=> new KorisnikController().prijava(req,res)

    
)
korisnikRouter.route('/registracija').post(
    (req,res)=> new KorisnikController().registracija(req,res)
)
korisnikRouter.route('/promena_lozinke').post(
    (req,res) => new KorisnikController().promena_lozinke(req,res)
)
korisnikRouter.route('/proveri_korisnicko').post(
    (req,res) => new KorisnikController().proveri_korisnicko(req,res)
)
korisnikRouter.route('/izmeni_parametar').post(
    (req,res) => new KorisnikController().izmeni_parametar(req,res)
)

export default korisnikRouter;