import { Route, Routes } from 'react-router-dom'
import "animate.css/animate.compat.css";
import './App.css'
import New from './pages/New'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<New />} />
      </Routes>
    </>
  )
}

export default App
