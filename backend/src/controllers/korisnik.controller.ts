//import { Korisnik } from './../../../frontend/app/src/app/model/korisnik';
import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController{

    izmeni_parametre = (req:express.Request, res:express.Response)=>{
        let korisnik=new Korisnik(req.body);

       // let id = new ObjectId("60c204d584f8180decb41789");

       //imam ceo novi objekat nekretnine u req.body

        

        

        

        Korisnik.findOneAndUpdate({'korisnicko':req.body.korisnicko},{$set:{'ime':req.body.ime,
        'prezime':req.body.prezime, 'lozinka':req.body.lozinka,'slika':req.body.slika,
    'email':req.body.email, 'grad':req.body.grad,'drzava':req.body.drzava,'tip':req.body.tip}},{new:true},(err,result)=>{
        if(err)res.json({"message":"Greska"});
        else res.json({"message":"Uspelo"});
    })
        

        
    }

    odobri_korisnika = (req:express.Request, res:express.Response) => {
        let korisnicko = req.body.korisnicko;

        Korisnik.findOneAndUpdate({'korisnicko':korisnicko},{$set:{'odobren':1}},{new:true},(err,result)=>{
            if(err)res.json({"message":"Greska"});
            else res.json({"message":"Uspelo"});
            
        })
    }

    ukloni_korisnika = (req:express.Request, res:express.Response) =>{
        let korisnicko=req.body.korisnicko;

        console.log(korisnicko);

        Korisnik.remove({'korisnicko':korisnicko},(status)=>{
            res.json(status);
        })
    }

    izmeni_parametar = (req:express.Request, res:express.Response)=>{
        let korisnicko=req.body.korisnicko;
        let parametar:string=req.body.parametar;
        let vrednost=req.body.vrednost;

        console.log(parametar);
        console.log(korisnicko);
        console.log(vrednost);

        if(parametar=='grad'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'grad':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if (parametar=='ime'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'ime':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if (parametar=='prezime'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'prezime':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if (parametar=='e-mail'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'e-mail':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if (parametar=='drzava'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'drzava':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if (parametar=='slika'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'slika':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }else if(parametar=='tip'){
            Korisnik.findOne({'korisnicko':korisnicko}).update({'tip':vrednost},(err,kor)=>{
                if(err)res.status(400).json({'message':'doslo je do greske'});
                else res.status(200).json({'message' : 'ok'});
            })
        }

        
    }

    proveri_korisnicko = (req : express.Request, res : express.Response)=>{
        let korisnicko=req.body.korisnicko;


        console.log(korisnicko);

        Korisnik.findOne({'korisnicko':korisnicko},(err,korisnik)=>{
            if(korisnik)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }

    prijava = (req : express.Request, res : express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        

        Korisnik.findOne({'korisnicko':korisnicko,'lozinka':lozinka},(err,korisnik)=>{
            console.log();
            if(err)console.log(err);
            else res.json(korisnik);
        })
    }

    registracija = (req : express.Request, res : express.Response) => {
        let korisnik = new Korisnik(req.body);
        console.log(" consossssssssssle.log(req.body);"); 
        console.log(req.body);
        
        korisnik.save().then((korisnik)=>{
            res.status(200).json({'message' : 'korisnik dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }
    promena_lozinke= (req: express.Request, res:express.Response) => {
        let korisnicko=req.body.korisnicko;
        let lozinka=req.body.lozinka;
        let nova_lozinka=req.body.nova_lozinka;

        Korisnik.findOne({'korisnicko':korisnicko,'lozinka':lozinka}).update({"lozinka": nova_lozinka},(err,kor)=>{
            if(err)res.status(400).json({'message':'doslo je do greske'});
            else res.status(200).json({'message':'lozinka promenjena'});
        });
        
    }

    dohvati_korsinike = (req: express.Request, res:express.Response)=>{
        Korisnik.find({'odobren':1,'tip':1},(err,korisnici)=>{
            if(err)console.log(err);
            else res.json(korisnici);
        })
    }

    dohvati_neodobrene = (req: express.Request, res:express.Response)=>{
        Korisnik.find({'odobren':0,'tip':1},(err,korisnici)=>{
            if(err)console.log(err);
            else res.json(korisnici);
        })
    }
}