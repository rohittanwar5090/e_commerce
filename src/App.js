// // import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [quantity, setQuantity] = useState(0);

//   const handleSubtractOne = () => {
//     setCount(count - 1);
//   };                                    //for - 1

//   const handleAddOne = () => {
//     setCount(count + 1);
//   };                            //for + 1

//   const handleOnChange = (e) => {
//     setQuantity(e.target.value);  // for taking the input value
//   };

//   const handleSubtractQuantity = () => {
//     console.log(count)
//      setCount(count - parseInt(quantity, 10));
//      console.log(count)
//   };

//   const handleAddQuantity = () => {
//     console.log(count)
//      setCount(count + parseInt(quantity, 10));
//      console.log(count)
//   };

//   const handleResetCounter = () => {
//     setCount(0);
//     setQuantity(0);
//   };

//   return (
//     <div>
//       <h1>Simple Counter in React using Hooks</h1>
//       <div>
//         <div>
//           <p>{count}</p>
//           <div >
//             <button  onClick={handleSubtractOne}>
//               -1
//             </button>
//             <button onClick={handleAddOne}>+1</button>
//           </div>
//         </div>
//         <div>
//           <h3>Add / substract custom quantity</h3>
//           <div>
//             <input
//               type="text"
//               value={quantity}
//               onChange={handleOnChange}
//               className={"mr-10"}
//             />

//             <button
//               className={"mr-5 width-40"}
//               onClick={handleSubtractQuantity}
//             >
//               -
//             </button>
//             <button className={"width-40"} onClick={handleAddQuantity}>
//               +
//             </button>
//           </div>
//         </div>
//         <button id={"counter-reset"} onClick={handleResetCounter}>
//           Reset Counter
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import './App.css';

function App() {
  const [first, setFirst] = useState(0);
  const [inputchange, setInputchange] = useState();

  const changesetting = (e) => {
    setInputchange(e.target.value);
  }
  const incrementer = () => {
    if (parseInt(inputchange, 10) > 1)
      setFirst(first => first + parseInt(inputchange, 10))
    else {
      setFirst(first + 1);
    }
  }
  const decrementer = () => {
    if (parseInt(inputchange, 10) > 1)
      setFirst(first => first - parseInt(inputchange, 10))
    else {
      setFirst(first - 1);
    }
  }
  const reset = () => {
    setFirst(0);
    setInputchange("Add a number ")
  }
  return (
    <div className="App">
      <div className='heading'>
        <h4>Incrementer and Decrementer</h4>
      </div>
      <div className="input_tag">
        <input
          value={inputchange}
          onChange={changesetting}
          type="text"
          placeholder='Add a number ' />
      </div>
      <div className="display">
        {first}
      </div>
      <div className="buttons_sec">
        <button onClick={incrementer}>Increment</button>
        <button onClick={decrementer}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
