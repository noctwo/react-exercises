import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import ArticleDetails from './pages/ArticleDetails/ArticleDetails'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article-details/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
