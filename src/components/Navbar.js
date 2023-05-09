import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-bottom">
      <div className="container">
        <Link className="h1 d-block my-2 text-decoration-none link-dark" to="">
          OMDB Project
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
