import React from 'react';
import './index.css'

let curDate = new Date(2022, 12, 25 );
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { };

if (curDate >= 1 && curDate < 12) {
    greeting = ' Good Morning';
    cssStyle.color = 'green'

} else if ( curDate >= 12 && curDate < 19 ) {
    greeting = ' Good Afternoon ';
    cssStyle.color = 'orange'
} else {
    greeting = ' Good Night';
    cssStyle.color = 'red';
}

function Wishing () {
    return (<h1>hello sir, <span style={cssStyle}>{greeting}</span> </h1>)
}

export default Wishing



