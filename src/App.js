import React, {useState} from "react";
// import DigitalTime from "./DigitalTime";
// // import Heading from './Heading';
// // import Paragraph from './Paragraph'
// // import List from './List'
// import Wishing from "./Wishing";
// import {add, sub, div, mult} from './Calculation';
// import Netflix from "./Netflix";
// import Amazon from "./Amazon";
// import Sdata from './Sdata';
// import SlotM from "./SlotMach";
import './index.css';
// import OnClickChange from "./OnClickChange";
// import Form from './Form';
import ToDoList from "./ToDoList";




// const favSeries = 'Amazon';

// const FavS = () => {
//   if (favSeries === 'Netflix'){
//     return <Netflix />;
//   }else {
//     return <Amazon />;
//   }
// };


const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrayElem, index) => {
        return index !== id;
      });
    });
  };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items" 
          value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{inputList}</li> */}
         { Items.map((itemval,index) => {
          return <ToDoList 
          key={index}
          id={index} 
          text={itemval}
          onSelect = {deleteItems}
          />
          })}
        </ol>
      </div>
    </div>
      {/* <Form /> */}
    </>
  );
  
// let newTime = new Date().toLocaleTimeString();
// const [ctime, setCtime] = useState(newTime);

// const UpdateTime = () => {
//   let newCTime = new Date().toLocaleTimeString();
//   setCtime(newCTime);
}

    // return( 
    // <>
    //   <h1>{ctime}</h1>
    //   <button onClick={UpdateTime}>Get Time </button>

    {/* <h1> 🎰 Welcome tp <span> Slot Machine game </span> 🎰 </h1> */}
{/* <div>
    <SlotM x='😄' y='😄' z='😄'/>
    <SlotM x='😃' y='😆' z='🥰'/>
    <SlotM x='🍎' y='🍌' z='🥭'/>
    <SlotM x='👪' y='👪' z='👪'/>
</div> */}
      {/* <h1>List of top 5 Netflix Series in 2020</h1> */}
    {/* <FavS /> */}

    {/* {(favSeries === 'Netflix') ? <Netflix /> : <Amazon /> } */}
    {/* <ul>
        <li>Sum of two no. is {add(40, 4)}</li>
        <li>Sub of two no. is {sub(30, 3)}</li>
        <li>Div of two no. is {div(10, 3)}</li>
        <li>Mult of two no. is {mult( 10, 3)} </li>
    </ul> */}


    // </>
    // );

  // }

export default App;


// const youtube = 'thapa'

// const favlog = 'react js'

// function myName () {
//   let name = 'swati'
//   return ( name )
// }

// function myNames () {
//   let names = 'parmar'
//   return ( names )
// }

// export default youtube;
// export { favlog, myName, myNames };


