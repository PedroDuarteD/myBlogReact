import Home from "./home/home"
import Thought from "./thought/thought"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>

<BrowserRouter>
      <Routes>
      <Route path="/" index element={<Home />} />
        <Route path="thoughts" element={<Thought />}>
        </Route>
      </Routes>
    </BrowserRouter>

  
    </>
  )
}

export default App
