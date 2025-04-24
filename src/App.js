import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StudentForm from "./MyComponent/EmailSignatureForm";
import Header from "./MyComponent/Header";
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";

function App() {
  const [G, setG] = useState(true);
  return (
    <Router>
      <Header title={" Sign Ate"} setG={setG}/>
        {G && <StudentForm />}
        {!G && <About />}
      <Footer />
    </Router>
  );
}

export default App;