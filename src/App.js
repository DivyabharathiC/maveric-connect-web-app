import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <div className="App">
  <Header/>
  <LoginPage/>
  <Footer/>
    </div>
  );
}

export default App;
