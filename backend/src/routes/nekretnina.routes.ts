import express from 'express';
import { NekretninaController } from '../controllers/nekretnina.controller';


const nekretninaRouter=express.Router();

nekretninaRouter.route('/nekretnine_po_gradu').get(
    (req,res) => new NekretninaController().nekretnine_po_gradu(req,res)
)

nekretninaRouter.route('/dohvati_nekretnine_grada').get(
    (req,res) => new NekretninaController().dohvati_nekretnine_grada(req,res)
)

nekretninaRouter.route('/dohvati_kuce_prodaja').get(
    (req,res) => new NekretninaController().dohvati_kuce_prodaja(req,res)
)


nekretninaRouter.route('/dohvati_stanove_prodaja').get(
    (req,res) => new NekretninaController().dohvati_stanove_prodaja(req,res)
)


nekretninaRouter.route('/dohvati_kuce_izdavanje').get(
    (req,res) => new NekretninaController().dohvati_kuce_izdavanje(req,res)
)

nekretninaRouter.route('/dohvati_stanove_izdavanje').get(
    (req,res) => new NekretninaController().dohvati_stanove_izdavanje(req,res)
)

nekretninaRouter.route('/dohvati_gradove').get(
    (req,res) => new NekretninaController().dohvati_gradove(req,res)
)

nekretninaRouter.route('/dohvati_iz_cenovnog_ranga').get(
    (req,res) => new NekretninaController().dohvati_iz_cenovnog_ranga(req,res)
)

nekretninaRouter.route('/ukloni_nekretninu').post(
    (req,res) => new NekretninaController().ukloni_nekretninu(req,res)
)

nekretninaRouter.route('/ukloni_promociju').post(
    (req,res) => new NekretninaController().ukloni_promociju(req,res)
)

nekretninaRouter.route('/dohvati_sve').get(
    (req,res) => new NekretninaController().dohvati_sve(req,res)
)

nekretninaRouter.route('/prikazi_promovisane').get(
    (req,res)=> new NekretninaController().prikazi_promovisane(req,res)

    
)

nekretninaRouter.route('/pretraga').get(
    (req,res) => new NekretninaController().pretraga(req,res)
)

nekretninaRouter.route('/dohvati_nekretnine_korisnika').get(
    (req,res) => new NekretninaController().dohvati_nekretnine_korisnika(req,res)
)

nekretninaRouter.route('/dodaj_nekretninu').post(
    (req,res) => new NekretninaController().dodaj_nekretninu(req,res)
)

nekretninaRouter.route('/izmeni_parametre').post(
    (req,res) => new NekretninaController().izmeni_parametre(req,res)
)

nekretninaRouter.route('/prikazi_neodobrene').get(
    (req,res) => new NekretninaController().prikazi_neodobrene(req,res)
)
nekretninaRouter.route('/odobri_nekretninu').post(
    (req,res) => new NekretninaController().odobri_nekretninu(req,res)
)
nekretninaRouter.route('/promovisi_nekretninu').post(
    (req,res) => new NekretninaController().promovisi_nekretninu(req,res)
)
nekretninaRouter.route('/prikazi_nepromovisane').get(
    (req,res) => new NekretninaController().prikazi_nepromovisane(req,res)
)


export default nekretninaRouter;