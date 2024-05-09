import {Router} from "express"
import * as ctrUsuarios from "../controllers/controller.usuarios"

const routerUsuarios = Router();
const root = "/usuarios";

routerUsuarios.get(root, ctrUsuarios.obtenerUsuarios);
routerUsuarios.post(root, ctrUsuarios.agregarUsuario);



export default routerUsuarios

