import FacilityCard from "../Shared/FacilityCard";

const Featured = () => {
  const arr = new Array(9).fill("*");
  return (
    <div>
      <h1 className="text-3xl">Featured Facilities</h1>
      <div className="mt-3 grid lg:grid-cols-4 gap-6">
        {arr.map((item) => (
          <FacilityCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
