import{Viaje} from '../model/Viaje.js'
import {Testimonial} from '../model/Testimoniales.js'

const paginaInicio = async (req, res)=>{ // req - lo que enviamos res - lo que express nos responde
  
  //Consultar 3 viajes del modelo viaje
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({limit:3}));
  promiseDB.push(Testimonial.findAll({limit:3}))
  
  try {
  const resultado = await Promise.all(promiseDB);
    res.render('home',{
      pagina : 'Home',
      clase:'home',
      viajes:resultado[0],
      testimoniales:resultado[1]
    })
  } catch (error) {
    console.log(error);
  }
}

const paginaNosotros = (req, res)=>{ // req - lo que enviamos res - lo que express nos responde
  res.render('aboutUs',{
    pagina:'About us'
  })
}

const paginaViajes = async (req, res)=>{ // req - lo que enviamos res - lo que express nos responde
  //Consultar base de datos
  const viajes = await Viaje.findAll();
  
  console.log(viajes);

  res.render('trips',{
    pagina:'Next Trips',
    viajes
  })
}

const paginaTestimonios = async (req, res)=>{ // req - lo que enviamos res - lo que express nos responde
 try {
  const testimoniales = await Testimonial.findAll();
  res.render('testimonials',{
    pagina:'Testimonials',
    testimoniales
  });
 } catch (error) {
   console.log(error);
 } 
}

//Muestra un viaje por su slug


const  paginaDetalleViaje = async (req, res)=>{
  
  const { slug } = req.params;
 // console.log(req.params)

  try {
    const viaje = await Viaje.findOne({
     where: { slug },
    });
    res.render('trip',{
      pagina:'Trip Information',
      viaje
    })
    
  } catch (error) {
    console.log(error);
  }

}

export{
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalleViaje

}