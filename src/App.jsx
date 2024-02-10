import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/MyNav";

function App() {
  const [count, setCount] = useState(0);

  return <Navbar links={["Home", "About", "Browse"]} />;
}

export default App;
