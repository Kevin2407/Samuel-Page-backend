const { Router } = require('express');
const articulosCtrl = require('../controllers/articulos.controllers.js');

const router = Router();

router.get('/', articulosCtrl.listarArticulos);
router.post('/', articulosCtrl.postearArticulo);
router.put('/', articulosCtrl.destacarArticulo);
router.get('/destacado', articulosCtrl.obtenerDestacado);
router.delete('/:id', articulosCtrl.eliminarArticulo);
router.put('/:id', articulosCtrl.editarArticulo);
router.get('/:id', articulosCtrl.obtenerArticulo);

module.exports = router;












// import { Router } from 'express';
// import articulosCtrl from '../controllers/articulos.controllers.js';

// const router = Router();

// router.get('/', articulosCtrl.listarArticulos);
// router.post('/', articulosCtrl.postearArticulo);
// router.put('/', articulosCtrl.destacarArticulo);
// router.get('/destacado', articulosCtrl.obtenerDestacado);
// router.delete('/:id', articulosCtrl.eliminarArticulo);
// router.put('/:id', articulosCtrl.editarArticulo);
// router.get('/:id', articulosCtrl.obtenerArticulo);

// export default router;
