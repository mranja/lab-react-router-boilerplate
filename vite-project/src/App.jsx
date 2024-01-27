import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;