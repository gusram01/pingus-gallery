import path from 'path';
import express from 'express';
import morgan from 'morgan';
import multer, { Options as MulterOptions } from 'multer';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const uploadsPath = path.resolve(__dirname, 'public', 'uploads');
const multerConfig: MulterOptions = {
  dest: uploadsPath
};

app.set('port', process.env.PORT);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer(multerConfig).single('image'));
app.use(helmet());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ ok: true });
});

export default app;
