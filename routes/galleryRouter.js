import express from 'express';
import galleryController from '../controllers/galleryController.js';
import upload from '../helpers/multerHelper.js';

const galleryRouter = express.Router();

galleryRouter.get('/', galleryController.index);
galleryRouter.post('/', upload.single('photo'), galleryController.store);

export default galleryRouter;
