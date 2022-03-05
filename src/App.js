import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        Crypto App
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coin/:asds" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
