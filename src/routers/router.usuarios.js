import {Router} from "express"
import * as ctrUsuarios from "../controllers/controller.usuarios"

const routerUsuarios = Router();

routerUsuarios.get("/usuarios", ctrUsuarios.enviarUsuarios)


export default routerUsuarios

