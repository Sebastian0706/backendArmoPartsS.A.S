import express, { json } from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import router from "./Routes/AutoparteRoute.js";
import router2 from "./Routes/LoginRoute.js";
import session from 'express-session';
import bodyParser from 'body-parser';
import { getConnection } from "./Config/Connection.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/listarc', router);
app.post("/login", router2);

app.listen(process.env.PORT, () => {
    getConnection();
    console.log(`Servidor conectado en el puerto ${process.env.PORT}`)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');

;