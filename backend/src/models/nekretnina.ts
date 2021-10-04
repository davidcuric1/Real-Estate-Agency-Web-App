import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Nekretnina = new Schema(
    {
        
        deskriptivni_naziv:{
            type:String
        },
        grad:{
            type:String
        },
        opstina:{
            type:String
        }, 
        ulica:{
            type:String
        },
       
        broj:{
            type:Number
        },
        tip:{
            type: String
        },
        spratnost_kuca:{
            type:Number
        },
        sprat:{
            type:String
        },
        spratnost_zgrada:{
            type:Number
        },
        kvadratura:{
            type:Number
        },
        broj_soba:{
            type:Number
        },
        
        namestenost:{
            type:String
        },
        galerija:{
            type:Array
        },
        status:{
            type:String
        },
        cena:{
            type:Number
        },
        vlasnik:{
            type:String
        },
        promovisana:{
            type:Number
        },
        odobrena:{
            type:Number
        },


        
    }
)

export default mongoose.model('Nekretnina',Nekretnina,'Nekretnine');
