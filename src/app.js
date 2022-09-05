//Todo respecto a la aplicacion va en el app.js

import express from "express";
//Permite comunicacion sin probelmas entre front y back
import cors from "cors";
import { user } from "./components"
import { product } from "./components";
//Exporta variable, funcion o componente
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/user",user)
app.use("/api/v1/product",product)