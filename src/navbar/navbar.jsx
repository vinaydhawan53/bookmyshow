import React from "react";
// import { Show3 } from "../drawer/search";
import { Show } from '../drawer/sign'
import { Show1 } from '../drawer/location';
import Sidebar from "../drawer/drawer";
import { useNavigate } from "react-router-dom";
// import { navbarMenuItems, navbarMenuItems1 } from "./constant";
import { navbarMenuItems, navbarMenuItems1 } from "../navbardata";
export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const navigate = useNavigate()

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    // const [openModal, setOpenModal] = React.useState(true);
    // const [email, setEmail] = useState('');

    // function onCloseModal() {
    //     setOpenModal(false);
    //     //   setEmail('');
    // }


    const handleNavigate = (path) => {
        console.log(path)
        navigate(path)
    }
    return (<>
        <div className="super-container">
            <div className="ist-cond">
                {/* <img src="" alt="" /> */}

                 {/* <img src='https://cdn.prod.website-files.com/600ee75084e3fe0e5731624c/65b6384089ec9e265952391f_bookmyshow-logo-vector-removebg-preview%20(1)-p-500.png' alt="" /> */}
{/* <img src="https://as2.ftcdn.net/v2/jpg/01/68/46/15/1000_F_168461551_pyiS0OjsgzoEvZly7VXBoULmoHxoquCW.jpg" alt="" /> */}
<h3>Movie<span>Ticket</span></h3>
                {/* <h3>book<span>my</span>Show</h3> */}
                <div className="one">
                <div className="search">


                    <i className="fa-solid fa-magnifying-glass icon  "> </i>

                    <input type="text" placeholder="Search for Movies,Events Plays,Sport and Activities" className="search-input" />

                </div>
            </div>
            </div>


            <div className="loc-con">
                {/* <select >   <option value="">location <Show1></Show1></option> </select> */}
                <Show1  />

                <Show />
                <i class="fa-solid fa-bars icon-con" onClick={toggleDrawer}>
                    <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
                </i>
            </div>
        </div>
        <div className="super-second-con">
            <div className="super-second-one">
                <div className="first-con">
                    {
                        navbarMenuItems.map((h1) => {
                            return <ul onClick={() => handleNavigate(h1.path)}>{h1.name}</ul>
                        })
                    }
                </div>
                <div className="second-con">
                    {
                        navbarMenuItems1.map((h2) => {
                            return <ul onClick={() => handleNavigate(h2.path)}>{h2.name}</ul>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}
