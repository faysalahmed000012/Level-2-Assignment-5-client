import data from "../../data/Members.json";

const Members = () => {
  return (
    <div>
      <div className="divider"></div>
      <h1 className="mt-10 mb-6 text-2xl text-center">
        Get to Know Our Team Members
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data.map((item) => (
          <div key={item.name} className="card my-3 bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={item.imgUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
