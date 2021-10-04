import express from 'express';
//import nekretninaRouter from 'src/routes/nekretnina.routes';
import Nekretnina from '../models/nekretnina';

export class NekretninaController{


    nekretnine_po_gradu = (req:express.Request, res:express.Response) =>{
        let response;

        Nekretnina.aggregate([
            { $match: { odobrena: 1 } },
            { $group : {_id:"$grad", count: {$sum : 1}} }
        ],(err: any,resp: any)=>{if(err)console.log(err);
        
        else res.json(resp)})
        

        //console.log(response);

        //res.json(response);
    }

    dohvati_nekretnine_grada = (req:express.Request, res:express.Response) =>{
        let grad = req.query.grad;

        Nekretnina.count({'grad':grad},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }

    dohvati_gradove = (req:express.Request, res:express.Response) =>{
       
        Nekretnina.distinct('grad',{},(err,gradovi)=>{
            if(err)console.log(err);
            else res.json(gradovi);
        })
    }

    dohvati_stanove_izdavanje = (req:express.Request, res:express.Response) =>{

        Nekretnina.count({'tip': 'Stan', 'status':'Iznajmljivanje','odobrena':1},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }
    dohvati_kuce_izdavanje = (req:express.Request, res:express.Response) =>{

        Nekretnina.count({'tip': 'Kuca', 'status':'Iznajmljivanje','odobrena':1},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }
    dohvati_stanove_prodaja = (req:express.Request, res:express.Response) =>{

        Nekretnina.count({'tip': 'Stan', 'status':'Prodaja','odobrena':1},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }
    dohvati_kuce_prodaja = (req:express.Request, res:express.Response) =>{

        Nekretnina.count({'tip': 'Kuca', 'status':'Prodaja','odobrena':1},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }

    

    dohvati_iz_cenovnog_ranga =  (req:express.Request, res:express.Response)=>{
        let donja=req.query.donjaCena;
        let gornja=req.query.gornjaCena;

        console.log(donja);
        console.log(gornja);

        Nekretnina.count({'cena':{$gt:donja,$lt:gornja},'odobrena':1},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })


    }

    dohvati_sve = (req:express.Request, res:express.Response) =>{
        Nekretnina.find({'odobrena':1},(err,nekretnine)=>{
            if(err)console.log(err);
            else res.json(nekretnine);
        })
    }

    ukloni_promociju = (req:express.Request, res:express.Response) =>{
        var ObjectId = require('mongodb').ObjectId;

        Nekretnina.findOneAndUpdate({_id:ObjectId(req.body.id)},{$set:{'promovisana':0}},{new:true},(err,result)=>{
            if(err)res.json({"message":"Greska"});
            else res.json({"message":"Uspelo"});
            
        })
    }

    promovisi_nekretninu = (req:express.Request, res:express.Response)=>{
        var ObjectId = require('mongodb').ObjectId;

        Nekretnina.findOneAndUpdate({_id:ObjectId(req.body.id)},{$set:{'promovisana':1}},{new:true},(err,result)=>{
            if(err)res.json({"message":"Greska"});
            else res.json({"message":"Uspelo"});
            
        })
    }

    odobri_nekretninu = (req:express.Request, res:express.Response)=>{
        var ObjectId = require('mongodb').ObjectId;

        console.log(req.body.id);

        Nekretnina.findOneAndUpdate({_id:ObjectId(req.body.id)},{$set:{'odobrena':1}},{new:true},(err,result)=>{
            if(err)res.json({"message":"Greska"});
            else res.json({"message":"Uspelo"});
            
        })
    }
    prikazi_nepromovisane = (req:express.Request, res:express.Response)=>{
        Nekretnina.find({'promovisana':0},(err,odobrene)=>{
            if(err)console.log(err);
            else res.json(odobrene);
        })
    }

    prikazi_neodobrene = (req:express.Request, res:express.Response)=>{
        Nekretnina.find({'odobrena':0},(err,odobrene)=>{
            if(err)console.log(err);
            else res.json(odobrene);
        })
    }

    izmeni_parametre = (req:express.Request, res:express.Response)=>{
        let nekretnina=new Nekretnina(req.body);

       // let id = new ObjectId("60c204d584f8180decb41789");

       //imam ceo novi objekat nekretnine u req.body

        var ObjectId = require('mongodb').ObjectId; 

        let deskriptivni_naziv=req.body.deskriptivni_naziv;

        console.log(deskriptivni_naziv);

        let id = req.body._id;

        Nekretnina.findOneAndUpdate({_id:ObjectId(id)},{$set:{'galerija':req.body.galerija,
        'deskriptivni_naziv':deskriptivni_naziv, 'grad':req.body.grad,'opstina':req.body.opstina,
    'ulica':req.body.ulica, 'broj':req.body.broj,'tip':req.body.tip,'spratnost_kuca':req.body.spratnost_kuca,
    'sprat':req.body.sprat, 'spratnost_zgrada':req.body.spratnost_zgrada,'kvadratura':req.body.kvadratura,'broj_soba':req.body.broj_soba,
    'namestenost':req.body.namestenost,'status':req.body.status,'cena':req.body.cena,'vlasnik':req.body.vlasnik,
    'promovisana':req.body.promovisana,'odobrena':req.body.odobrena}},{new:true},(err,result)=>{
        if(err)res.json({"message":"Greska"});
        else res.json({"message":"Uspelo"});
    })
        

        
    }
    ukloni_nekretninu = (req:express.Request, res:express.Response) =>{
        let id_nekretnine=req.body.id_nekretnine;

        var ObjectId = require('mongodb').ObjectId; 

        Nekretnina.remove({_id:ObjectId(id_nekretnine)},(status)=>{
            res.json(status);
        })
    }

    dodaj_nekretninu = (req:express.Request, res:express.Response)=>{
        let nekretnina = new Nekretnina(req.body);

        console.log(nekretnina);

        nekretnina.save().then((nekretnina)=>{

            console.log(nekretnina);
            res.status(200).json({'message' : 'nekretnina dodata'});

        }).catch((err)=>{

            res.status(200).json({'message' : 'doslo do greske'});
        })
    }

    dohvati_nekretnine_korisnika = (req:express.Request, res:express.Response)=> {
        let korisnicko = req.query.korisnicko;

        console.log(korisnicko);

        Nekretnina.find({'vlasnik': korisnicko,'odobrena':1},(err,nekretnine)=>{
            if(err)console.log(err);
            else res.json(nekretnine);
        })
    }
    

    prikazi_promovisane = (req : express.Request, res : express.Response)=>{
        Nekretnina.find({'promovisana':1,'odobrena':1},(err,promovisane)=>{
            if(err)console.log(err);
            else res.json(promovisane);
        })
    }

    pretraga= (req: express.Request, res:express.Response) => {
       
        
       let grad=req.query.grad;
       let cenaDonja=req.query.cenaDonja;
       let cenaGornja=req.query.cenaGornja;

       let parametri = req.params;

      /* if(typeof grad == undefined)grad=null;
       if(typeof(cenaDonja) == 'undefined'){cenaDonja=null;console.log("SETOVAO NA NULL");}
       if(typeof(cenaGornja) == 'undefined')cenaGornja=null;*/
       

       console.log(grad);
       console.log(cenaDonja);
       console.log(cenaGornja);
       

       if (cenaDonja!=-1 && cenaGornja==-1 && grad=='-1'){
           console.log("Usao iako je nulll!");
           Nekretnina.find({'cena':{$gt : cenaDonja},'odobrena':1},(err,rezultat)=>{
            if(err)console.log(err);
            else res.json(rezultat);
           })
       }
       if (cenaDonja==-1 && cenaGornja!=-1 && grad=='-1'){
           console.log("Drugi if");
        Nekretnina.find({'cena':{$lt : cenaGornja},'odobrena':1},(err,rezultat)=>{
         if(err)console.log(err);
         else res.json(rezultat);
        })
    }
    if (cenaDonja==-1 && cenaGornja==-1 && grad!='-1'){
        console.log("treci if");
        Nekretnina.find({'grad': grad,'odobrena':1},(err,rezultat)=>{
         if(err)console.log(err);
         else res.json(rezultat);
        })
    }
    if (cenaDonja!=-1 && cenaGornja!=-1 && grad=='-1'){
        console.log("cetvrti if");
        Nekretnina.find({'cena':{$gt : cenaDonja,$lt : cenaGornja},'odobrena':1},(err,rezultat)=>{
         if(err)console.log(err);
         else res.json(rezultat);
        })
    }
    if (cenaDonja!=-1 && cenaGornja==-1 && grad!='-1'){
        console.log("peti if");
        Nekretnina.find({'cena':{$gt : cenaDonja},'grad':grad,'odobrena':1},(err,rezultat)=>{
         if(err)console.log(err);
         else res.json(rezultat);
        })
    }
    if (cenaDonja==-1 && cenaGornja!=-1 && grad!='-1'){
        console.log("seesti if");
        Nekretnina.find({'cena':{$lt : cenaGornja},'grad':grad,'odobrena':1},(err,rezultat)=>{
         if(err)console.log(err);
         else res.json(rezultat);
        })
    }
        
    if(cenaDonja!=-1 && cenaGornja!=-1 && grad!='-1'){
        console.log("sedmi if");
        Nekretnina.find({'cena':{$gt : cenaDonja,$lt : cenaGornja},'grad' : grad,'odobrena':1},(err,rezultat)=>{
            if(err)console.log(err);
            else res.json(rezultat);
        })
    }
    }
}