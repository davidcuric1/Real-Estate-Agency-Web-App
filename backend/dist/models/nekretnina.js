"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Nekretnina = new Schema({
    deskriptivni_naziv: {
        type: String
    },
    grad: {
        type: String
    },
    opstina: {
        type: String
    },
    ulica: {
        type: String
    },
    broj: {
        type: Number
    },
    tip: {
        type: String
    },
    spratnost_kuca: {
        type: Number
    },
    sprat: {
        type: String
    },
    spratnost_zgrada: {
        type: Number
    },
    kvadratura: {
        type: Number
    },
    broj_soba: {
        type: Number
    },
    namestenost: {
        type: String
    },
    galerija: {
        type: Array
    },
    status: {
        type: String
    },
    cena: {
        type: Number
    },
    vlasnik: {
        type: String
    },
    promovisana: {
        type: Number
    },
    odobrena: {
        type: Number
    },
});
exports.default = mongoose_1.default.model('Nekretnina', Nekretnina, 'Nekretnine');
//# sourceMappingURL=nekretnina.js.map