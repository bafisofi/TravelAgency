import express from 'express';
import{paginaInicio, 
  paginaNosotros,
  paginaViajes, 
  paginaTestimonios, 
  paginaDetalleViaje} from '../controllers/paginasController.js';
  import{guardarTestimonial} from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/',paginaInicio)

router.get('/aboutUs',paginaNosotros)

router.get('/trips',paginaViajes)

router.get('/trips/:slug',paginaDetalleViaje)

router.get('/testimonials',paginaTestimonios)

router.post('/testimonials', guardarTestimonial)



export default router