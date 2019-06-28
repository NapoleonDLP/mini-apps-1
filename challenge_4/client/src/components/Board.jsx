import React from 'react';
import Rows from './Rows.jsx';

var Board = (props) => {

  return (
    <div class="board">
        {props.board.board.map((row) =>
            <Rows row={row} />
          )}
    </div>
  )
}

export default Board;