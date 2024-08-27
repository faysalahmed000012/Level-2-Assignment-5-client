import Filtering from "../components/facilities/Filtering";
import Search from "../components/facilities/Search";
import FacilityCard from "../components/Shared/FacilityCard";

const Facilities = () => {
  const arr1 = new Array(20).fill("*");
  return (
    <div>
      <h1 className="mt-10 mb-6 text-2xl text-center">
        Here is all our Sport Facilities
      </h1>
      <Search />
      <Filtering />
      <div className="mt-6 grid lg:grid-cols-4 gap-6">
        {arr1.map((item) => (
          <FacilityCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
