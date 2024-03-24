import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return <Hero />;
}
