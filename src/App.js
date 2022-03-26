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
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home/postlistpage" element={<PostList />} />
        <Route exact path="/home/postdetailpage/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
