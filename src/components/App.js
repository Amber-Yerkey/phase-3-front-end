import { Route, Routes } from "react-router-dom"
import '../index.css'
import Home from './Home'


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;