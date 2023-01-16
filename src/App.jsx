import Home from "./Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Moviepage from "./Components/Moviepage"
import NetflixContanier from "./Components/NetflixContanier"


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Movie" element={<Moviepage />} />
        <Route path="signup" element={<NetflixContanier />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
