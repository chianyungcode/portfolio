import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import KeySelling from "../components/KeySelling";
import FooterCTA from "../components/FooterCTA";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <KeySelling />
      <FooterCTA />
    </>
  );
}
