import express from 'express';
import path from 'path';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.path = path.resolve(__dirname, '../views');

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.static('public'));
    this.server.set('views', this.path);
    this.server.set('view engine', 'ejs');
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
