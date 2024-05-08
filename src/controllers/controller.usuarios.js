const usuarios = [
    {
        "id": "123",
        "nombre": "Pepito"

    },
    {
        "id": "456",
        "nombre": "Juanita"

    }
]


export function enviarUsuarios (req, res) {

    res.json({
        isOk : true,
        data: usuarios
    })
    
}