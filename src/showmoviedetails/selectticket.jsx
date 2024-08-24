// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Component } from './termcondition';
// // import { Component } from './Bookticketmodal';
// // import './App.css';

// const seats = [
//   { row: 'L', type: 'recliner', price: 470, count: 12 },
//   { row: 'K', type: 'prime', price: 210, count: 20 },
//   { row: 'J', type: 'prime', price: 210, count: 20 },
//   { row: 'H', type: 'prime', price: 210, count: 20 },
//   { row: 'G', type: 'prime', price: 210, count: 20 },
//   { row: 'F', type: 'classic', price: 200, count: 12 },
//   { row: 'E', type: 'classic', price: 200, count: 12 },
//   { row: 'D', type: 'classic', price: 200, count: 12 },
//   { row: 'C', type: 'classic', price: 200, count: 12 },
//   { row: 'B', type: 'classic', price: 200, count: 12 },
//   { row: 'A', type: 'classic', price: 200, count: 12 },
// ];

//   export function Select() {
//     const location = useLocation()
//     const [propData,setPropData] = useState()
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [isSelected, setisSelected]=useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [seatCollection, setSeatCollection] = useState([])
//   // const [isbutton,setisButton]=useState(false);

//   const seatArr = []
//   useEffect(() => {
//     if(location?.state){
//       setPropData(location?.state)
//     }
    
//   }, [location?.state])


//   // const collection = [];
  
//   const toggleSeatSelection = (row, number,price) => {
//     const seatId = `${row}${number}`;
// // collection.push(seatId)
// // collection?.map((e, idx) => {
// //   if(e === seatId){
// //     collection.splice(idx, '')
// //       } else {
// //         setSeatCollection(collection);

// //       }
// //     })
// //     console.log(seatCollection, 'ID')
// //     if(seatId){
// //     }
//       setSeatCollection([...seatCollection, seatId])
//       setSelectedSeats(prevSelectedSeats =>
//         prevSelectedSeats.includes(seatId)
//         ? prevSelectedSeats.filter(seat => seat !== seatId)
//         : [...prevSelectedSeats, seatId]
//       );
//       setisSelected(!isSelected)
      
//     console.log(seatCollection, 'STATE')
    
//     // else {
//     //   setisSelected(false)
//     // }
//     // setisButton(false)
//   };
// const ticketBook=()=>{
  
// }
//   return (
//     <div className="App">
//       <h1>{propData?.title}</h1>
//       <p>PVR: City Mall, Yamunanagar | Tomorrow, 11 Jul, 07:10 PM</p>
//       <div className="seating-chart">
//         {seats.map(section => (
//           <div key={section.row} className={`seat-row ${section.type}`}>
//             <h2>{section.row}</h2>
//             {Array.from({ length: section.count }, (_, i) => i + 1).map(number => (
//               <div
//                 key={number}
//                 className={`seat ${selectedSeats.includes(`${section.row}${number}`) ? 'selected' : ''}`}
//                 onClick={() => toggleSeatSelection(section.row, number)}

//               >
//                 {number}
//               </div>
//             ))}
//           </div>
//         ))}
//          {/* <Component/> */}
//         {/* { isSelected && <button  className='btn-book-con' onClick={isSelected}>book ticket</button>} */}
//         {/* <button  className='btn-book-con'>book ticket</button> */}
//         <Component/>
//       </div>
//     </div>
//   );
// }

// // export default App;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Component } from './termcondition';
// import { Component } from './Bookticketmodal';
// import './App.css';

const seats = [
  { row: 'L', type: 'recliner', price: 470, count: 12 },
  { row: 'K', type: 'prime', price: 210, count: 20 },
  { row: 'J', type: 'prime', price: 210, count: 20 },
  { row: 'H', type: 'prime', price: 210, count: 20 },
  { row: 'G', type: 'prime', price: 210, count: 20 },
  { row: 'F', type: 'classic', price: 200, count: 12 },
  { row: 'E', type: 'classic', price: 200, count: 12 },
  { row: 'D', type: 'classic', price: 200, count: 12 },
  { row: 'C', type: 'classic', price: 200, count: 12 },
  { row: 'B', type: 'classic', price: 200, count: 12 },
  { row: 'A', type: 'classic', price: 200, count: 12 },
];

export function Select() {
  const location = useLocation();
  const [propData, setPropData] = useState();
  const [time, setTime] = useState('')
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [seatCollection, setSeatCollection] = useState([]);

  useEffect(() => {
    if (location?.state) {
      setPropData(location?.state?.state);
      setTime(location?.state?.time)
    }
  }, [location?.state]);

  console.log(time,'TIME')

  const toggleSeatSelection = (row, number, price) => {
    const seatId = `${row}${number}`;
    setSeatCollection([...seatCollection, seatId]);
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(seat => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
    setIsSelected(!isSelected);
    setTotalPrice(prevTotalPrice =>
      selectedSeats.includes(seatId) ? prevTotalPrice - price : prevTotalPrice + price
    );
  };

 
console.log(propData,'HHH')
  return (
    <div className="App">
      <h1>{propData?.title}</h1>
      
      <p>PVR: City Mall | Tomorrow, 19 Jul, {time}</p>
      <div className="seating-chart">
        {seats.map(section => (
          <div key={section.row} className={`seat-row ${section.type}`}>
            <h2>{section.row}</h2>
            {Array.from({ length: section.count }, (_, i) => i + 1).map(number => (
              <div
                key={number}
                className={`seat ${selectedSeats.includes(`${section.row}${number}`) ? 'selected' : ''}`}
                onClick={() => toggleSeatSelection(section.row, number, section.price)}
              >
                {number}
              </div>
            ))}
          </div>
        ))}
        <div className="total-price">
          <h2>Total Price: ₹{totalPrice}</h2>
        </div>
        <Component totalPrice={totalPrice} />
      </div>
    </div>
  );
}
