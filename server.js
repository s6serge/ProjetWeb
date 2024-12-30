import 'dotenv/config';
import express, {json} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';


//Creation du serveur
const app = express();


//Ajouter les middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());

//Lancer le serveur 
app.listen(process.env.PORT);
console.info("serveur demarree: ")

console.info('http://localhost:' + process.env.PORT);

//Installation de la librairie nodemon 
//commande npm i -D nodemon
//Dans la commande, le -D signifie que nous somme en mode developpement et qu'on ne pourra utiliser en mode production