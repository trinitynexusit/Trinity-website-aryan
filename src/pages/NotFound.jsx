import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#041827] text-white">
      <h1 className="text-7xl font-bold text-[#00ff99]">404</h1>

      <p className="mt-4 text-xl">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-400">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-lg bg-[#00ff99] text-black font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}