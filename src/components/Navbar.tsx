import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <header className="h-20 w-full flex items-center inset-0  fixed z-[999]">
      <div className="mx-auto max-w-[1216px] w-full backdrop-blur-sm border rounded-3xl border-gray-300 px-8 py-1 flex items-center justify-between">
        <h3 className="font-semibold text-xl">
          Chian Yung{" "}
          <span className="text-gray-400 font-normal text-md ml-1">
            Software Engineer
          </span>{" "}
        </h3>

        <div className="p-2 flex gap-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/posts" className="">
            Posts
          </Link>
          <Link to="/profile" className="">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
