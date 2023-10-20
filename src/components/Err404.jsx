import { Link } from "react-router-dom";

const Err404 = () => {
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404 - {"can't"} reach this page</h1>
        <Link to={"/"}>
          <button className="btn btn-primary btn-handler fw-bold">
            go back home {"->"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Err404;
