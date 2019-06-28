import React from 'react';
import Slots from './Slots.jsx';

var Row = (props) => {
  return (
    <div id="row">
      <div>
        {props.row.map((slot) => {
          <Slots slot={slot} />
        })}
      </div>
    </div>
  )
}

export default Row;