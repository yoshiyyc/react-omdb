import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QueryContext } from "../store";
import { PageContext } from "../store";

function Home() {
  const { query, setQuery } = useContext(QueryContext);
  const { setCurrentPage } = useContext(PageContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/result");
  };

  useEffect(() => {
    setCurrentPage(1);
    setQuery({
      title: "",
      year: "",
      type: "",
    });
  }, []);

  return (
    <div className="container vh-100 py-5">
      <h2 className="text-center">Start Searching Movies!</h2>
      <form className="d-flex flex-column flex-md-row justify-content-center my-5">
        <div className="d-flex flex-column flex-md-row align-items-center my-4 m-md-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control mx-2"
            value={query.title}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center my-4 m-md-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type=""
            name="year"
            id="year"
            className="form-control mx-2"
            value={query.year}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex align-items-center my-4 m-md-3">
          <select
            name="type"
            id="type"
            className="form-select mx-2"
            value={query.type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Type
            </option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
        <button
          className="btn btn-outline-primary col col-md-1 my-4 m-md-3 ms-md-5"
          type="button"
          onClick={handleSubmit}
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Home;
