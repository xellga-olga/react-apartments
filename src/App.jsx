import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
