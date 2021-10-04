"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zahtev = new Schema({
    posiljalac: {
        type: String
    },
    vlasnik: {
        type: String
    },
    tip: {
        type: String
    },
    pocetak: {
        type: Date
    },
    kraj: {
        type: Date
    },
    status: {
        type: String
    },
    placanje: {
        type: String
    },
    id_nekretnine: {
        type: String
    },
    odobrenVlasnik: {
        type: Number
    },
    odobrenAgencija: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Zahtev', Zahtev, 'Zahtevi');
//# sourceMappingURL=zahtev.js.map