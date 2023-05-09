import { createContext } from "react";

export const QueryContext = createContext({});
export const PageContext = createContext({});

// export const StoreContext = createContext({});

// const StoreProvider = ({ children }) => {
//   const [query, setQuery] = useState({
//     title: "",
//     year: "",
//     type: "",
//   });

//   const [currentPage, setCurrentPage] = useState(1);

//   const store = {
//     query: [query, setQuery],
//     currentPage: [currentPage, setCurrentPage],
//   };

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   );
// };

// export default StoreProvider;
