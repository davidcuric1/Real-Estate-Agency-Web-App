import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import nekretninaRouter from './routes/nekretnina.routes';
import zahtevRouter from './routes/zahtev.routes';


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/db");
const con = mongoose.connection;
con.once('open', ()=>{
    console.log("Konekcija sa bazom uspesna.");
})

const router = express.Router();

router.use('/korisnik',korisnikRouter); //dodaj ruter
router.use('/nekretnina',nekretninaRouter);
router.use('/zahtev',zahtevRouter);


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));