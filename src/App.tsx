import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLibrary from "./pages/UserLibrary";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      {/** Nav bar will show on every page */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/catalog/:id" element={<BookDetails/>} />
        <Route path="/library" element={<UserLibrary/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
