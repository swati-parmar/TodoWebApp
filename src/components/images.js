import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'

const name = 'swati';
const img = 'https://picsum.photos/id/237/200/300'
const img1 = 'https://picsum.photos/200/300'
const img2 = 'https://picsum.photos/seed/picsum/200/300'
const links = 'https://www.thapatechnical.com/'

// .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px #ffe9c5;
//     margin: 70px 0;
//     font-family: 'Josefin Sans', sans-serif;
//   }

const heading = {
    color: '#fa9191',
    textTransform: 'capitalize',
    textAlign: 'center',

};

ReactDOM.render(
    <>
        <h1 style={heading}>
            My name is {name}
        </h1>
        <div className='img_div'>
            <img src={img} alt='randomImages'/>
            <img src={img1} alt='randomImages'/>
            <a href={links} target='_thapa'>
                <img src={img2} alt='randomImages'/>
            </a>
        </div>

    </>,  
  document.getElementById('root')
  );
