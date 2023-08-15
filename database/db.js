import { Sequelize } from 'sequelize';
import database from '../config/database.js';
import movieModel from '../models/movieModel.js';
import galleryModel from '../models/galleryModel.js';

const db = new Sequelize(database.name, database.user, database.password, database.options);

export const movie = await movieModel(db).sync();
export const gallery = await galleryModel(db).sync();

export default db;
