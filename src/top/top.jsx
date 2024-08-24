import React from "react";
import { Treding } from "../data/container5";
import { OutdoorEvents } from "../data/container3";
import { Sliding, Sliding1 } from "../data/slider";
import { LaughterShow } from "../data/container4";
import { Container } from "../data/container";
import { Funmoviedata } from "../data/container2";
import 'swiper/css';

export function Top() {

    return (<>



        <Sliding />
        <Container />
        <div className="set-img">

        </div>
        <div className="set-con1">
            <h4>The best of live events</h4>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png" className="img-set1" alt="" srcset="" />
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" className="img-set1" alt="" />
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" className="img-set1" alt="" />
        </div>
        <Sliding1 />

        <div className="premiere">

            <Funmoviedata />

            <OutdoorEvents />
            <LaughterShow />
            <Treding />



        </div>
        {/* <Footer>

        </Footer> */}
        {/* <Moviesclick/> */}
    </>)
}
