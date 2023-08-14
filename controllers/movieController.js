import { movie } from '../database/db.js';

const movieController = {
  async index(req, res) {
    try {
      const movies = await movie.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get all movies',
        data: movies,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  async store(req, res) {
    const { title, year, genre } = req.body;
    try {
      if (title && year && genre) {
        const movies = await movie.findOrCreate({
          where: {
            title,
          },
          defaults: {
            year,
            genre,
          },
        });
        res.json({
          status: movies[1] ? 'success' : 'error',
          statusCode: movies[1] ? 200 : 400,
          message: movies[1] ? 'Success create new movie' : 'Movie already exist',
          data: movies,
        });
      } else {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Title, year and genre are required',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const movies = await movie.findByPk(id);
      if (movies) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success get movie by id',
          data: movies,
        });
      } else {
        res.status(404).json({
          status: 'error',
          statusCode: 404,
          message: 'Movie not found',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { title, year, genre } = req.body;
    try {
      const movies = await movie.findByPk(id);
      if (movies) {
        await movie.update(
          {
            title,
            year,
            genre,
          },
          {
            where: {
              id,
            },
          }
        );
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success update movie',
          data: {
            id,
            title,
            year,
            genre,
          },
        });
      } else {
        res.status(404).json({
          status: 'error',
          statusCode: 404,
          message: 'Movie not found',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  async destroy(req, res) {
    const { id } = req.params;
    try {
      const movies = await movie.findByPk(id);
      if (movies) {
        await movie.destroy({
          where: {
            id,
          },
        });
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success delete movie',
        });
      } else {
        res.status(404).json({
          status: 'error',
          statusCode: 404,
          message: 'Movie not found',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
};

export default movieController;
