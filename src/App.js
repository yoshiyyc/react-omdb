import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryContext, PageContext } from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ItemDetail from "./pages/ItemDetail";
import Error from "./pages/Error";

function App() {
  const [query, setQuery] = useState({
    title: "",
    year: "",
    type: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <QueryContext.Provider value={{ query, setQuery }}>
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="result" element={<SearchResult />} />
              <Route path="result/:id" element={<ItemDetail />} />
              <Route path="error" element={<Error />} />
            </Route>
          </Routes>
        </PageContext.Provider>
      </QueryContext.Provider>
    </>
  );
}

export default App;
