import express from 'express';
import Zahtev from '../models/zahtev';


export class ZahtevController{

   /* dohvati_zahteve_za_odobravanje = (req:express.Request, res:express.Response) =>{
        Zahtev.find({'odobren': 0},(err,zahtevi)=>{
            if(err)console.log(err);
            else res.json(zahtevi);
        })
    }*/

    dohvati_zahteve_za_agenciju = (req:express.Request, res:express.Response) => {
        Zahtev.find({'odobrenAgencija': 0,'odobrenVlasnik':1},(err,zahtevi)=>{
            if(err)console.log(err);
            else res.json(zahtevi);
        })
    }


    dohvati_zahteve_korisnika = (req:express.Request, res:express.Response) =>{
        let korisnicko = req.query.korisnicko;

        console.log(korisnicko);

        Zahtev.find({'vlasnik': korisnicko,'odobrenVlasnik':0},(err,zahtevi)=>{
            if(err)console.log(err);
            else res.json(zahtevi);
        })
    }


    dodaj_zahtev = (req:express.Request, res:express.Response)=>{
        let zahtev = new Zahtev(req.body);

        console.log(zahtev);

        zahtev.save().then((zahtev)=>{

            console.log(zahtev);
            res.status(200).json({'message' : 'zahtev dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }
    prihvati_zahtev = (req:express.Request, res:express.Response)=>{
        let id_zahteva=req.body.id_zahteva;
        let id_nekretnine=req.body.id_nekretnine;

        var ObjectId = require('mongodb').ObjectId; 

        Zahtev.findOneAndUpdate({_id:ObjectId(id_zahteva)},{$set:{'odobrenVlasnik':1}},{new:true},(err,result)=>{
        if(err)res.json({"message":"Greska"});
        else res.json({"message":"Uspelo"});
        
    })
    }
    prihvati_zahtev_agent = (req:express.Request, res:express.Response)=>{
        let id_zahteva=req.body.id_zahteva;
        let id_nekretnine=req.body.id_nekretnine;
        console.log(id_zahteva);
        var ObjectId = require('mongodb').ObjectId; 

        Zahtev.findOneAndUpdate({_id:ObjectId(id_zahteva)},{$set:{'odobrenAgencija':1}},{new:true},(err,result)=>{
        if(err)res.json({"message":"Greska"});
        else res.json({"message":"Uspelo"});
        
    })
    }

    ukloni_odbijene = (req:express.Request, res:express.Response) => {
        let id_zahteva=req.body.id_zahteva;
        let id_nekretnine=req.body.id_nekretnine;

        var ObjectId = require('mongodb').ObjectId; 

        Zahtev.remove({'id_nekretnine':id_nekretnine, _id:{$ne:ObjectId(id_zahteva)}},(status)=>{
            res.json(status);
        })

    }



}