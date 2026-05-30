import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8">

      <div className="text-center max-w-2xl">

        {/* BIG NUMBER */}
        <h1 className="text-8xl font-light tracking-tight">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-3xl font-light mt-6">
          Page not found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-neutral-500 mt-6 leading-7">
          The page you are looking for does not exist or has been moved.
          Please return to the homepage or explore our properties.
        </p>

        {/* ACTIONS */}
        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/"
            className="btn btn-primary"
          >
            Back Home
          </Link>

          <Link
            to="/properties"
            className="btn btn-secondary"
          >
            View Properties
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;