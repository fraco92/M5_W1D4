import "./App.css";
import { Footer } from "./components/MyFooter";
import { Navbar } from "./components/MyNav";
import { Welcome } from "./components/Welcome";
import { getBooks } from "./api/api";
import { AllTheBooks } from "./components/AllTheBooks";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <>
      <Navbar links={["Home", "About", "Browse"]} />
      <Welcome />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 mx-8 mb-16">
        <AllTheBooks />
      </div>
      <Footer />
    </>
  );
}

export default App;
