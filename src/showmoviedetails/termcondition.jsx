
"use client";
import { useLocation, useNavigate } from 'react-router-dom';
// import { Modal } from "flowbite-react";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function Component({totalPrice}) {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const ticketBook = () => {
        navigate('/BookingSuccess', {state : totalPrice});
      };
    

    return (
        <>

            <button onClick={() => setOpenModal(true)} className='btn-book-con'>book ticket</button>

            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <div className="terms-con">
                    <div className="terms-con-set">

                        <Modal.Header>Terms of Service</Modal.Header>
                        {/* <Modal.Body> */}

                            <div className="set-terms-condtion">

                                <p>1. Seat layout page for PVR cinemas is for representational purposes only and actual seat layout might vary.</p>
                                <p>2. Tickets are compulsory for children of 3 years & above.</p>
                                <p>3. Patrons below the age of 18 years cannot be admitted for movies certified `A`.</p>
                                <p>4. For 3D movies, ticket price includes charges towards usage of 3D glasses.</p>
                                <p>5. Outside Food & Beverage are not allowed in the cinema premises.</p>
                                <p>6. Items like laptops, camera, knives, lighter, match box, cigarettes, firearms and all types of inflammable objects are strictly prohibited.</p>
                                <p>7. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.</p>
                                <p>8. Tickets once purchased cannot be cancelled, exchanged or refunded.</p>
                                <p>9. Ticket prices are subject to change without any prior notification.</p>
                            </div>
                        {/* </Modal.Body> */}
                        <div className="term-con-set-btn">

                            <div className="term-btn">
                                <button className="term-btn-set" onClick={() => setOpenModal(false)}>Cancel</button>
                            </div>
                            <div className="term-btn">

                                <button className="term-btn-set1" color="gray" onClick={ticketBook}>Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
