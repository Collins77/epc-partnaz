import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Advocacy from "./pages/services/Advocacy"
import Funding from "./pages/services/Funding"
import Consultancy from "./pages/services/Consultancy"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Energy from "./pages/sectors/Energy"
import Oil from "./pages/sectors/Oil"
import Infrastucture from "./pages/sectors/Infrastucture"
import Plants from "./pages/sectors/Plants"
import Water from "./pages/sectors/Water"
import Special from "./pages/sectors/Special"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/advocacy"  element={<Advocacy />} />
          <Route path="/services/funding"  element={<Funding />} />
          <Route path="/services/consultancy"  element={<Consultancy />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sectors/energy" element={<Energy />} />
          <Route path="/sectors/oil" element={<Oil />} />
          <Route path="/sectors/infrastructure" element={<Infrastucture />} />
          <Route path="/sectors/plants" element={<Plants />} />
          <Route path="/sectors/water" element={<Water />} />
          <Route path="/sectors/special-projects" element={<Special />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
