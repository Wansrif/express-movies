import express from 'express';
import movieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get('/', movieController.index);
movieRouter.post('/', movieController.store);
movieRouter.get('/:id', movieController.show);
movieRouter.put('/:id', movieController.update);
movieRouter.delete('/:id', movieController.destroy);

export default movieRouter;
