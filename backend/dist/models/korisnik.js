"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Korisnik = new Schema({
    korisnicko: {
        type: String, required: [true, 'Korisnickoo je obavezno.']
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    email: {
        type: String
    },
    tip: {
        type: Number
    },
    slika: {
        type: String
    },
    drzava: {
        type: String
    },
    grad: {
        type: String
    },
    odobren: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'Korisnici');
//# sourceMappingURL=korisnik.js.map