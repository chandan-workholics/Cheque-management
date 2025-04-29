import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
