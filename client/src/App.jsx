import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedPage from "./components/ProtectedPage";
import Profile from "./components/Profile";
import Admin from "./components/Admin";



function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>} />
        <Route path="/profile" element={<ProtectedPage><Profile /></ProtectedPage>} />
        <Route path="/admin" element={<ProtectedPage><Admin /></ProtectedPage>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
