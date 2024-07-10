import {Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout'

function App() {
 

  return (
    <>
    
    <div className='bg-black '>
         <Navbar/>
         <Routes>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
         </Routes>
         <Footer/>    
    </div>
   
    </>
    
      
  )
}

export default App
