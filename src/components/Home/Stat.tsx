const Stat = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 container mx-auto w-full">
      <h1 className="text-3xl md:text-4xl mt-10 mb-6">Some Statistics</h1>

      <div className="stats w-full stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Customers</div>
          <div className="stat-value text-primary">31K</div>
          <div className="stat-desc">Jan 1st,2024 - August 1st,2024</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value text-green-500">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
