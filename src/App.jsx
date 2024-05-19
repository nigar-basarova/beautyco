import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import '../public/assets/css/Navbar.css'
import '../public/assets/css/Introduction.css'
import '../public/assets/css/Story.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// komponentler gelecek
import NavbarKomponenti from './components/Navbar'
import Introduction from './components/Introduction'
import Story from './components/Story.'
function App() {
 

  return (
    <>
 < NavbarKomponenti/>
<Introduction/>
<Swiper/>
<Story/>
 </>
  )
}

export default App
