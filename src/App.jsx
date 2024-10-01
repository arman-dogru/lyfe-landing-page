import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  )
}

export default App
