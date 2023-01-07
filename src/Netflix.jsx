import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';

const Netflix = () => {
    return  (<Cards 
        key={Sdata.id}
        sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        link={Sdata[1].link}
/>
);
}

export default Netflix