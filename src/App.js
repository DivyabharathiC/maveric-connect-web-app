import logo from "./logo.svg";
 import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PostListsPage from "./pages/HomePage/PostListsPage";
import PostList from "./components/PostList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home/postlistpage" element={<PostList/>} />
      </Routes>
    </Router>
  );
}

export default App;
