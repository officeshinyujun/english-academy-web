import {BrowserRouter, Route, Routes} from "react-router-dom";
import VoiceExtraction from "./pages/VoiceExtraction";
import Vocabulary from "./pages/Vocabulary";
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VoiceExtraction/>} />
        <Route path="/vocabulary" element={<Vocabulary/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
