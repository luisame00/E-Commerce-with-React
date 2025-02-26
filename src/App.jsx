import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Notification from './components/Notification/Notification'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {

  const [cart, setCart] = useState([])
  const [notification, setNotification] = useState('')

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
    showNotification(`${item.name} added to cart!`)
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 3000)
  }

  const [filters, setFilters] = useState({
    maxPrice: '',
    size: '',
    color: '',
    type: ''
  });
  
return(
    <div>
      <Navbar cart={cart} setFilters={setFilters}/>
      <Banner />
      <Products cart={cart} addToCart={addToCart} filters={filters}/>
      {notification && <Notification message={notification} onClose={() => setNotification()}/>}
      <Footer />
    </div>
  )
}

export default App
