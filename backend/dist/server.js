"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const korisnik_routes_1 = __importDefault(require("./routes/korisnik.routes"));
const nekretnina_routes_1 = __importDefault(require("./routes/nekretnina.routes"));
const zahtev_routes_1 = __importDefault(require("./routes/zahtev.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/db");
const con = mongoose_1.default.connection;
con.once('open', () => {
    console.log("Konekcija sa bazom uspesna.");
});
const router = express_1.default.Router();
router.use('/korisnik', korisnik_routes_1.default); //dodaj ruter
router.use('/nekretnina', nekretnina_routes_1.default);
router.use('/zahtev', zahtev_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map