import "./App.css";
import { Footer } from "./components/MyFooter";
import { Navbar } from "./components/MyNav";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome />
      <Navbar links={["Home", "About", "Browse"]} />
      <Footer />
    </>
  );
}

export default App;
