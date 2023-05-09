import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { QueryContext, PageContext } from "../store";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function SearchResult() {
  const { query } = useContext(QueryContext);
  const { currentPage } = useContext(PageContext);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const titleQuery = query.title ? `&s=${query.title}` : "";
  const yearQuery = query.year ? `&y=${query.year}` : "";
  const typeQuery = query.type ? `&type=${query.type}` : "";

  const [totalResults, setTotalResults] = useState(0);
  const [resultsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalResults / resultsPerPage)
  );

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=c32e4c87${
          titleQuery + yearQuery + typeQuery
        }&page=${currentPage}`
      );
      res.data.Search ? setMovieList(res.data.Search) : navigate("/error");
      setIsLoading(false);
      setTotalResults(Number(res.data.totalResults));
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getMovies();
    setTotalPages(Math.ceil(totalResults / resultsPerPage));
  }, [currentPage, totalResults]);

  const RenderedResult = () => {
    return (
      <div className="container py-5 min-vh-100">
        <nav className="mb-4 h5" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className="text-decoration-none link-dark" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Search Results
            </li>
          </ol>
        </nav>
        <h6 className="my-3">
          {`Results ${(currentPage - 1) * resultsPerPage + 1} ~ ${
            currentPage === totalPages
              ? (currentPage - 1) * resultsPerPage +
                (totalResults % resultsPerPage)
              : currentPage * resultsPerPage
          } of "${query.title ? query.title : "any title"}" of ${
            query.type ? query.type : "any type"
          } found in ${query.year ? query.year : "any year"}`}
        </h6>
        <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-6 list-unstyled">
          {movieList.map((i) => {
            return (
              <li key={i.imdbID} className="col my-3">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={i.Poster}
                    alt={i.Title}
                    style={{ objectFit: "cover" }}
                    height="200px"
                  />
                  <div className="card-body">
                    <Link
                      className="card-text d-block text-decoration-none link-dark text-center stretched-link"
                      to={`/result/${i.imdbID}`}
                    >
                      {i.Title}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination totalPages={totalPages} />
      </div>
    );
  };

  return <>{isLoading ? <Loading /> : <RenderedResult />}</>;
}

export default SearchResult;
