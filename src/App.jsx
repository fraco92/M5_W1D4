import "./App.css";
import { Footer } from "./components/MyFooter";
import { Navbar } from "./components/MyNav";
import { Welcome } from "./components/Welcome";
// import { getBooks } from "./api/api";
import { AllTheBooks } from "./components/AllTheBooks";
import { useState } from "react";
import { useEffect } from "react";
import scifi from "./assets/json_books/scifi.json";

function App() {
  return (
    <>
      <Navbar links={["Home", "About", "Browse"]} />
      <Welcome />
      <AllTheBooks books={scifi} />
      <Footer />
    </>
  );
}

export default App;
