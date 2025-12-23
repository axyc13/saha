import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/whoweare/Hero";
import Governance from "@/src/components/whoweare/Governance";
import OurPeople from "@/src/components/whoweare/OurPeople";
import OurValues from "@/src/components/whoweare/OurValues";
import "../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-16">
        <Governance />
        <OurPeople />
      </div>
      <OurValues />
      <Footer />
    </div>
  );
}
