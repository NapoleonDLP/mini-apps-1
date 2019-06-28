import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../src/components/Board.jsx';
import board from './app.js';

ReactDOM.render(<Board board={board}/>, document.getElementById('root'));