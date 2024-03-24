import { createLazyFileRoute } from "@tanstack/react-router";
import KeySelling from "../components/KeySelling";
import FooterCTA from "../components/FooterCTA";
import HeroSection from "../components/HeroSection";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <KeySelling />
      <FooterCTA />
    </>
  );
}
