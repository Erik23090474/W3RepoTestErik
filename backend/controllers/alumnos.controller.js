import { modelo } from "../models/alumnos.model.js";

modelo.create({
    Name:"Erik",
    edad:19
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}