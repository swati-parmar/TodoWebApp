import React from 'react';
import MatchingSlots from './MatchingSlots';
import UnMatchSlots from './UnMatchSlots';

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😢';
  
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y, z} = props;
  
    if ((x=== y && y=== z)) {
      < MatchingSlots />
    }else {
      < UnMatchSlots/>
    }
  
  }

  export default SlotM;