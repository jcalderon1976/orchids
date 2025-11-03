import Hero from "../components/Hero";
import ServiceSession from "../components/ServiceSession";
import Operations from "../components/Operations";
import About from "../components/About";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Operations />
      <ServiceSession />
    </div>
  );
}
