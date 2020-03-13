import './styles/main.css';

import MovieController from './modules/movie/movie.controller';
import MovieService from './modules/movie/movie.service';
import MovieView from './modules/movie/movie.view';
import DBHelper from './common/db.helper';
import { DBStrategyTypes } from './common/db-strategy-types';

const app = document.getElementById('app');
const headerText = document.createElement('h1');
const dbHelper = DBHelper.getInstance();
const movieListController = new MovieController(new MovieView(), new MovieService());

dbHelper.setStrategyType(DBStrategyTypes.INDEXED_DB);

headerText.textContent = 'BM - Movie Search';

app.appendChild(headerText);
app.appendChild(movieListController.renderTemplate());
