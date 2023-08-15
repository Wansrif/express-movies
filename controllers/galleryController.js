import { gallery } from '../database/db.js';

const galleryController = {
  async index(req, res) {
    try {
      const galleryData = await gallery.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get gallery',
        data: galleryData,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error,
      });
    }
  },
  async store(req, res) {
    try {
      const image = req.file.path;
      const { caption } = req.body;
      const galleryData = await gallery.create({
        image,
        caption,
      });
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success create gallery',
        data: galleryData,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: error,
      });
    }
  },
};

export default galleryController;
