import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/people/Hero";
import Second from "@/src/components/people/Second";
import Team from "@/src/components/people/Team";
import Final from "@/src/components/people/Final";
import "../../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Second />
      <Team />
      <Final />
      <Footer />
    </div>
  );
}
