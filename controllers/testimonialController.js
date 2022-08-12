import {Testimonial} from '../model/Testimoniales.js'

const guardarTestimonial = async (req,res)=>{

  //Validar..
  console.log(req.body);
  const {nombre, correo , mensaje} = req.body;

  const errores = [];

  console.log(req.body);

  if(nombre.trim()===''){
    errores.push({mensaje:'Name is empty'});
  }

 if(correo.trim()===''){
  errores.push({mensaje:'Email is empty'});
  
}
if(mensaje.trim()===''){
  errores.push({mensaje:'Message is empty'});
}
if (errores.length > 0){
  
  //Consultar testimoniales Existentes
  const testimoniales = await Testimonial.findAll();

  //Mostrar vista con errores
  res.render('testimonials',{
    pagina:'Testimonials',
    errores,
    nombre,
    correo,
    mensaje,
    testimoniales
  })
} else {
  //Almacenarlo en la base de datos
  try {
    await Testimonial.create({
      nombre,
      correo,
      mensaje
    });
    res.redirect('/testimonials');
  } catch (error) {
    console.log(error);
  }
}

}
export {
  guardarTestimonial
}