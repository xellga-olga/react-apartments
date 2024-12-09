import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/homePage";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
