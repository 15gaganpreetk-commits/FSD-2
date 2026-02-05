import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Suspense, lazy } from "react"
import "./App.css"

const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="app-container">
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
