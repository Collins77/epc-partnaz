import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Advocacy from "./pages/services/Advocacy"
import Funding from "./pages/services/Funding"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/advocacy"  element={<Advocacy />} />
          <Route path="/services/funding"  element={<Funding />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
