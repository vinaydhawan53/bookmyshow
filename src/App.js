import './App.css';
import './showmoviedetails/bookticket.css'
import './showmoviedetails/showExplore.css'
import './showmoviedetails/selectticket.css'
import './top/top.css'
import './upper.css'
import './showmoviedetails/showMovie.css'
import './data/container.css'
import './drawer/drawer.css'
import './drawer/sign.css'
import './data/slider.css'
import './router/Movies.css'
import './showmoviedetails/sucess.css'
import './router/aboutus.css'
import { Top } from './top/top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MoviesComponent} from './router/Movies';
import { Moviesclick } from './showmoviedetails/showMovie';
import { Navbar } from './navbar/navbar';
import { Footer } from './upper';
import { Booking } from './showmoviedetails/bookticket';
import { Select } from './showmoviedetails/selectticket';
import { FunPicture } from './showmoviedetails/showExplorefun';
import { OutdoorPicture } from './showmoviedetails/showOutdoor';
import { LaughterPicture } from './showmoviedetails/laughterMovie';
import { Stream } from './router/Stream';
import { Events } from './router/Events';
import { Sports } from './router/Sports';
import { Activities } from './router/Activities';
import {  LoginSignup1 } from './router/contact';
import Aboutus from './router/aboutus';
import { LoginSignup } from './drawer/login';
import { BookingSuccess } from './showmoviedetails/sucees';
function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Top />} />
        <Route path={'/movies'} element={<MoviesComponent/>} />
        <Route path={'/Stream'} element={<Stream/>} />
        <Route path={'/Events'} element={<Events/>} />
        <Route path={'/Sports'} element={<Sports/>} />
        <Route path={'/activities'} element={<Activities/>} />
        <Route path={'/ContactUs'} element={<LoginSignup1/>} />
        <Route path={'/AboutUs'} element={<Aboutus/>} />
        <Route path={'/showMovie/:name'} element={<Moviesclick />}></Route>
        <Route path={'/showExplorefun/:name'} element={<FunPicture />}></Route>
        <Route path={'/showOutdoor/:name'} element={<OutdoorPicture />}></Route>
        <Route path={'/laughterMovie/:name'} element={<LaughterPicture />}></Route>
        <Route path="bookticket" element={<Booking />}></Route>
        <Route path='/select' element={<Select />} />
        <Route path='/ LoginSignup' element={<LoginSignup />} />
        <Route path='/BookingSuccess' element={<BookingSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App;
