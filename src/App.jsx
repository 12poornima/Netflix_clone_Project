import Home from "./Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Moviepage from "./Components/Moviepage"


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Movie" element={<Moviepage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
