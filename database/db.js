import { Sequelize } from 'sequelize';
import database from '../config/database.js';
import movieModel from '../models/movieModel.js';

const db = new Sequelize(database.name, database.user, database.password, database.options);

export const movie = await movieModel(db).sync();

export default db;
