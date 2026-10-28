import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import NumberRendering from './pages/NumberRendering.jsx'
import StringRendering from './pages/StringRendering.jsx'
import BooleanRendering from './pages/BooleanRendering.jsx'
import FalseRendering from './pages/FalseRendering.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f4f6fb] font-[Arial,Helvetica,sans-serif] text-[#172033]">
        <NavBar />
        <main className="mx-auto my-6 w-[min(760px,calc(100%-32px))] min-[521px]:my-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number-rendering" element={<NumberRendering />} />
            <Route path="/string-rendering" element={<StringRendering />} />
            <Route path="/boolean-rendering" element={<BooleanRendering />} />
            <Route path="/false-rendering" element={<FalseRendering />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
