import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Zahtev = new Schema(
    {
        
        posiljalac:{
            type:String
        },
        vlasnik:{
            type:String
        },
        tip:{
            type:String
        }, 
        pocetak:{
            type:Date
        },
       
        kraj:{
            type:Date
        },
        status:{
            type: String
        },
        placanje:{
            type:String
        },
        id_nekretnine:{
            type:String
        },
        odobrenVlasnik:{
            type:Number
        },
        odobrenAgencija:{
            type:Number
        }
        

        
    }
)

export default mongoose.model('Zahtev',Zahtev,'Zahtevi');