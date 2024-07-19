// import { Router } from "express";
// import articulosCtrl from '../controllers/articulos.controllers';

// // creo una instancia de router 

// const router = Router();

// // creo las rutas 

// router.route("/")
//     .get(articulosCtrl.listarArticulos)
//     .post(articulosCtrl.postearArticulo);

// router.route("/:id")
//     .delete(articulosCtrl.eliminarArticulo)
//     .put(articulosCtrl.editarArticulo)
//     .get(articulosCtrl.obtenerArticulo)

// export default router;




// src/routes/articulos.routes.js

import { Router } from 'express';
import articulosCtrl from '../controllers/articulos.controllers.js';

const router = Router();

router.get('/', articulosCtrl.listarArticulos);
router.post('/', articulosCtrl.postearArticulo);
router.delete('/:id', articulosCtrl.eliminarArticulo);
router.put('/:id', articulosCtrl.editarArticulo);
router.get('/:id', articulosCtrl.obtenerArticulo);

export default router;
