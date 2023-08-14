import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import movieRouter from './routes/movieRouter.js';

const port = process.env.APP_PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.use('/api/movies', movieRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
