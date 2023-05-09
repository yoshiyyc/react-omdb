import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ItemDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=c32e4c87&i=${id}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container min-vh-100 py-5">
      <nav className="mb-4 h5" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-dark" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-dark" to="/result">
              Search Results
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {data.Title}
          </li>
        </ol>
      </nav>
      <div className="row my-5">
        <div className="col">
          <img
            className="d-block mx-auto mb-3 mb-md-0"
            src={data.Poster}
            alt="data.Title"
          />
        </div>
        <div className="col">
          <p className="h3 text-center text-md-start">{data.Title}</p>
          <p className="text-danger text-center text-md-start">
            IMDB Rating: {data.imdbRating}
          </p>
          <table className="table table-bordered mt-5">
            <tbody>
              <tr>
                <td>Type</td>
                <td>{data.Type}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{data.Genre}</td>
              </tr>
              <tr>
                <td>Released</td>
                <td>{data.Released}</td>
              </tr>
              <tr>
                <td>Plot</td>
                <td>{data.Plot}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
