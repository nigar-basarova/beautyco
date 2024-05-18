import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import '../public/assets/css/Navbar.css'
import '../public/assets/css/Introduction.css'
// komponentler gelecek
import NavbarKomponenti from './components/Navbar'
import Introduction from './components/Introduction'
function App() {
 

  return (
    <>
 < NavbarKomponenti/>
<Introduction/>
 </>
  )
}

export default App
