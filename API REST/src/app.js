import express from 'express';
import { resolve } from 'path';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';

import dotenv from 'dotenv';
dotenv.config();

import './database';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.app.use(express.urlencoded({ extended:true }));
    this.app.use(express.json());
    this.app.use('/images',express.static(resolve(__dirname, 'upload', 'images')));
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photo/', photoRoutes);


  }
}

export default new App().app;
