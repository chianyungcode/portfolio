import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <div className="h-[4000px]">
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
