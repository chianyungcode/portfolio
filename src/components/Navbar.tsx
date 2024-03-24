import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className="h-20 mx-auto max-w-[1440px] px-[112px] flex items-center inset-0 fixed z-[999]">
      <motion.div
        className="w-full backdrop-blur-sm border rounded-3xl border-gray-300 px-8 py-1 flex items-center justify-between"
        whileHover={{ scale: 1.005, transition: { ease: "easeOut" } }}
        whileTap={{ scale: 1.01, transition: { ease: "easeOut" } }}

        // animate={{ x: 0 }}
        // transition={{ ease: "easeOut", duration: 2 }}
      >
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

        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </motion.div>
    </header>
  );
};

export default Navbar;
