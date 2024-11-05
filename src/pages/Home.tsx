import Featured from "../components/Home/Featured";
import Guide from "../components/Home/Guide";
import Hero from "../components/Home/Hero";
import Review from "../components/Home/Review";
import Stat from "../components/Home/Stat";
import WinterOfferSection from "../components/Home/WinterOfferSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Guide />
      <WinterOfferSection />
      <Stat />
      <Review />
    </>
  );
};

export default Home;
