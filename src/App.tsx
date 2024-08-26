import Featured from "./components/Home/Featured";
import Guide from "./components/Home/Guide";
import Hero from "./components/Home/Hero";
import Review from "./components/Home/Review";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="mx-[20px] lg:mx-[80px] mx-10px">
      <Navbar />
      <Hero />
      <Featured />
      <Guide />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
