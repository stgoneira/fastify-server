const { admin } = require('./firebase');

module.exports = async (req, res) => {
    switch( req.method ) {
        case 'GET':
            return procesarGET(req, res);
        case 'POST':
            return procesarPOST(req, res);
        case 'PUT':
            return procesarPUT(req, res);
        case 'DELETE':
            return procesarDELETE(req, res);
        default:
            res.code(500).send({error: 'Método HTTP no soportado!'});
    }
};

function getColeccion() {
    return admin.firestore().collection('categorias');
}

async function procesarPOST(req, res) {    
    try {
        const {nombre, descripcion} = req.body;
        const categoria = {
            nombre,
            descripcion
        }
        const documento = await getColeccion().doc(); // crea documento vacío 
        const id        = documento.id;
        documento.set( categoria );
        categoria.id = id; 
        return categoria; 
    } catch (error) {
        res.code(500).send({error: error.message});
    }
}

async function procesarGET(req, res) {
    try {
        const querySnapshot = await getColeccion().get();
        const documentos    = querySnapshot.docs.map( d => {
            /*
            return {
                id: d.id,
                ...d.data()
            }
            */
           return d.data(); 
        });
        return documentos;
    } catch (error) {
        res.code(500).send({error: error.message});
    }
}

async function procesarPUT(req, res) {
    return {m: 'PUT'};
}
async function procesarDELETE(req, res) {
    return {m: 'DELETE'};
}