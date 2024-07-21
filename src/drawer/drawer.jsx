// import { Top } from '../top'
import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const Sidebar = ({isOpen, toggleDrawer}) => {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size={350}
            >
                <div className='set'>
                    <h4>Hey!</h4>
                    <div className='img-cons'>

                    <img src="https://in.bmscdn.com/webin/voucher/corporate-gifting.png" className='img-cons' alt="" />
                    </div>



                </div>
            </Drawer>
        </>
    )
}

export default Sidebar
