const mongoose = require('mongoose');

const url = 'mongodb://localhost/DB';

mongoose.connect(url,{
})
.then(()=>console.log('conectado a mongo'))
.catch((e)=>console.log('el eror de conexion es :'+e));

const personaSchema = mongoose.Schema({
    nombre:String,
    apellido: String,
    edad:Number,
    pais:String
});
const nombre = mongoose.Schema({
    nombre:String
})

const personaModel = mongoose.model('personas',personaSchema)
const personaName = mongoose.model('persona',nombre)
//obtener nombres
const getname = async () =>{
    const nombre = await personaName.find()
    console.log(nombre)
}
//mostrar
const mostrar = async ()=>{
    const personas = await personaModel.find()
    console.log(personas)
}

//crear
const crear = async () => {
    const persona = new personaModel({
        nombre:'Jamil',
        apellido:'Gutierrez',
        edad:12,
        pais:'Peru'
    });
    const resultado = await persona.save();
    console.log(resultado);
}

//editar
const actualizar = async (id)=>{
    const persona = await personaModel.updateOne({_id:id},{
        $set:{
            nombre:'Evison Modificado',
            pais:'Peru modificado'
        }
    })
    
    
}

//Eliminar
const eliminar = async (id)=>{
    const persona = await personaModel.deleteOne({_id:id})
    console.log(persona);
}





//getname()
//mostrar()
//crear()
//actualizar('629a5f2cd842bf8a8b8d7d52');
eliminar('629a5f2cd842bf8a8b8d7d52')
