import {BrowserRouter, Route, Routes} from "react-router-dom";
import VoiceExtraction from "./pages/VoiceExtraction";
import Tutorial from "./pages/tutorial";
import Vocabulary from "./pages/Vocabulary";
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tutorial/>} />
        <Route path="/voice-extraction" element={<VoiceExtraction/>} />
        <Route path="/vocabulary" element={<Vocabulary/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
