import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-5 vh-100">
      <h2 className="d-block">Oops, something went wrong...</h2>
      <button
        type="button"
        className="btn btn-primary btn-lg d-block my-4"
        onClick={handleClick}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Error;
