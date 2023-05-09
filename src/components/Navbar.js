import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-dark border-bottom">
      <div className="container">
        <Link className="h1 d-block m-0 py-3 text-decoration-none" to="">
          OMDB Project
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
