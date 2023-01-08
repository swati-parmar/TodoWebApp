import React , {useState} from 'react';
import './IncreandDecreNum.css'

const IncreandDecreNum = () => {

    const [num, setNum] = useState(0)

    const incrementNum = () => {
        setNum(num + 1);
    };

    const decrementNum = () => {
       if (num > 0) {
        setNum(num - 1);
       } else {
        alert('sorry Zero limit reach');
        setNum(0);
       }
    };
    return (
        <div className='main_div'>
            <div className='center_div'>
            <h1>{num}</h1>
                <div className='btn_div'>
                <button onClick={incrementNum}>Increment</button>
                <button onClick={decrementNum}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default IncreandDecreNum; 