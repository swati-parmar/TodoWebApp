import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';

const Amazon = () => {
    return  (<Cards 
        key={Sdata.id}
        sname={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        link={Sdata[2].link}
/>
);
}

export default Amazon;