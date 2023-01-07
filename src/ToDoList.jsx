import React from 'react';

const ToDoList = (props) => {


    return (
    <>
        <div 
            className='todo_style' 
        >        
            <span 
            className="fa fa-times"
             aria-hidden="true" 
            onClick={() =>{
                props.onSelect(props.id)
            }}/>
            <span className='todo_txt'> {props.text} </span>
        </div>
    </>
    );
}

export default ToDoList;