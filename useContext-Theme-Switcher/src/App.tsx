import './App.css'
import Home from './pages/Home/Home'
import { createContext, useState } from 'react'


function App() {

  const [mode, setMode] = useState<boolean>(false);

  return (
    <>
    <section className={`app-content ${mode && "yellow"}`}>
    <Context.Provider value={[mode, setMode]}>
    <Home />
    </Context.Provider>
    </section>
    </>
  )
}
export const Context = createContext(false);
export default App
