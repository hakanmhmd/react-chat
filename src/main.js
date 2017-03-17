import React from 'react';
import App from './components/App.jsx';
import {render} from 'react-dom';
require('./main.scss');

render(<App />, document.getElementById('container'));