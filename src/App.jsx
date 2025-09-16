import { Routes, Route } from "react-router-dom"
import Login from "./Login.jsx"
import Phone from "./Phone.jsx"

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
  )
}

export default App
