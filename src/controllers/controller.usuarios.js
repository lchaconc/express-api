import {v4} from "uuid"
import usuarios from "../data/usuarios.json"



export function obtenerUsuarios (req, res) {

    res.json({
        isOk : true,
        data: usuarios
    })
    
}

export function agregarUsuario (req, res) {
    const {nombre} = req.body
    const id = v4();

    usuarios.push({
        id, nombre
    })

    //console.log(req);

    res.json(
        {
            isOk: true, id 
        }
    )
    
}