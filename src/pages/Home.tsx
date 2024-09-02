import Featured from "../components/Home/Featured";
import Guide from "../components/Home/Guide";
import Hero from "../components/Home/Hero";
import Review from "../components/Home/Review";
import Stat from "../components/Home/Stat";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Guide />
      <Stat />
      <Review />
    </>
  );
};

export default Home;
