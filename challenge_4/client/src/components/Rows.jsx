import React from 'react';
import Slots from './Slots.jsx';

var Row = (props) => {
  return (
    <div class="rows">
      {props.row.map((slot) =>
        <Slots slot={slot} />
      )}
    </div>
  )
}

export default Row;