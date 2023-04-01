import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState("light");

  const toggleMode =() => {
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor='#13175d';
      showAlert(" Dark Mode has been activated!", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been activated!", "success");
    }
  }

  const[alert, setAlert] = useState(null);
  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  return (
    <>
    <Router>

      <Navbar title="TextUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text below to analyze" mode={mode}/>}/>
        </Routes>
      </div>

      </Router>

    </>  
  );
}

export default App;
