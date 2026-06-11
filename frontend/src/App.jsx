import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkWithUs from './pages/WorkWithUs'

function App() {
  return (
    <HashRouter>
      <div className="overflow-x-clip">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
