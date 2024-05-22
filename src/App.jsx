import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import '../public/assets/css/Navbar.css'
import '../public/assets/css/Introduction.css'
import '../public/assets/css/Story.css'
import '../public/assets/css/Card.css'
import '../public/assets/css/CardTwo.css'
import '../public/assets/css/HowItWorks.css'




// import '../public/assets/css/CardTwo'

// komponentler gelecek
import NavbarKomponenti from './components/Navbar'
import Introduction from './components/Introduction'
import Story from './components/Story.'
import Card from './components/Card'
import HowItWorks from './components/HowItWorks'


import ProductSection from './components/ProductSection'
function App() {
 

  return (
    <>
 < NavbarKomponenti/>
<Introduction/>

<Story/>

< ProductSection/>
<HowItWorks/>
</>
  )
}

export default App
