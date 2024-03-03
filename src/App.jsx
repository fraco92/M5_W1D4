import "./App.css";
import { Footer } from "./components/MyFooter";
import { Navbar } from "./components/MyNav";
import { Welcome } from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllTheBooks } from "./components/AllTheBooks";
import { BooksProvider } from "./context/BookContext";
import { NotFound } from "./components/NotFound";
import { BookDetails } from "./components/BookDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <BooksProvider>
          <Navbar />

          <Welcome />
          <Routes>
            <Route path="/" element={<AllTheBooks />} />
            <Route path="/details/:asin" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BooksProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
