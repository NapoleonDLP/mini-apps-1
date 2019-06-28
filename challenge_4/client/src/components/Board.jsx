import React from 'react';
import Rows from './Rows.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null, null, null , null , null ],
        [null, null, null, null, null , null , null ],
        [null, null, null, null, null , null , null ],
        [null, null, null, null, null , null , null ],
        [null, null, null, null, null , null , null ],
        [null, null, null, null, null , null , null ]
      ]
    }
  }

  render() {
    return (
      <div id="board">
        <div>
          {this.state.board.map((row) => <Rows row={row} />)}
        </div>
      </div>
    )
  }

}

export default Board;