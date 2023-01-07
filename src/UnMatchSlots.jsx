import React from "react";



const UnMatchSlots = (props) => {
    // deb
    let {x, y, z} = props;
    return (
        <>
          <div className="slot_inner">
          <h1>
          {x} {y} {z} 
          </h1>
          <h1> This is Not Matching. </h1>
          <hr/>
          </div>
        </>
      )
}

export default UnMatchSlots;