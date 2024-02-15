import "./App.css";
import { Footer } from "./components/MyFooter";
import { Navbar } from "./components/MyNav";
import { Welcome } from "./components/Welcome";
// import { getBooks } from "./api/api";
import { AllTheBooks } from "./components/AllTheBooks";

function App() {
  return (
    <>
      <Navbar links={["Home", "About", "Browse"]} />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
