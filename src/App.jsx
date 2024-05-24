import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/User/User";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Home from "./components/Home";
import Photo from "./components/Photos/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
    <div className="App">
      
    <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="/conta/*" element={<ProtectedRoute><User/></ProtectedRoute>} />
            <Route path="/perfil/:user" element={<UserProfile/>} />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
