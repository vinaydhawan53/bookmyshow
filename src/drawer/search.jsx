// import React, { useEffect } from 'react';
// // import ReactDOM from 'react-dom';
// // import Modal from 'react-modal';
// // import { Modal } from "flowbite-react";
// // "use client";
// import { Modal } from "flowbite-react";
// import { useState } from "react";
// import { moviesData } from '../data/movie';
// // import SearchMovie from './searchmovie';

// export function Show3() {
//     const [openModal, setOpenModal] = useState(false);
//     const [searchOutput, setSearchOutput] = useState([]);
//     // const [email, setEmail] = useState('');
//     const [showModal, setShowModal] = useState(false)

//     const search = (e) => {
//       return (<>
//       {  moviesData?.filter((element, i, arr) => {
//             const localTypeValue = e?.target?.value.toLowerCase();
            
//             const movieTitle = element?.Title?.toLowerCase()
//             const check = movieTitle?.includes(localTypeValue)
            
//             console.log(check, 'ONE')
//             if (check) {
                
//                 setSearchOutput([...searchOutput, element])
                
//             } else {
//                 setSearchOutput([...searchOutput, element])
                
//             }
            
//         }
//     )
// }
//         </>)
//     }

//     useEffect(() => {
//         console.log('USE EFFECT', searchOutput)
        
//         if (searchOutput?.length > 0) {
//             setOpenModal(true)
//             // setShowModal(!showModal)
//         } else {
//             setOpenModal(false)
//         }
//     }, [searchOutput])

//     function onCloseModal() {
//         setOpenModal(false);
//         // setEmail('');
        
        
        

//     }
//     // console.log(searchOutput, 'JKJK')

//     return (
//         <>

//             <div className="one">
//                 <div className="search">


//                     <i className="fa-solid fa-magnifying-glass icon  "> </i>

//                     <input onChange={(e) => search(e)} type="text" placeholder="Search for Movies,Events Plays,Sport and Activities" className="search-input" />

//                 </div>
//             </div>
//             {console.log(showModal, 'SHOW')}
//             {showModal && <Modal open={showModal} size="md" onClose={onCloseModal} popup>
//                 <Modal.Body>

//                     {searchOutput?.map(e => {

//                         return (<div>
//                             {e.Title}

//                         </div>)

//                     })}

//                 </Modal.Body>
//             </Modal>}
//         </>
//     );
// }