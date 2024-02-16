import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Render from './components/Render'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Render />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App


