import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details/Details'
import Header from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:carId" element={<Details/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
