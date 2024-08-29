const MyBookings = () => {
  const arr1 = new Array(9).fill("*");
  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10">All Bookings : </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {arr1.map((item) => (
          <div className=" ms-1 lg:ms-10 mt-6 p-6 bg-base-200 rounded-xl grid lg:grid-cols-1 gap-6">
            <div className="flex flex-col  items-center justify-around gap-7">
              <div>
                <h1 className="text-xl lg:text-2xl">Cricket Field</h1>
                <p className="max-w-[214px]">456 Sports Ave, Springfield.</p>
              </div>
              <div className="w-full">
                <p className="">Time : 15:00 - 16:00</p>
                <p>Payable Amount : $446</p>
              </div>
              <div className="flex items-center justify-between gap-6">
                <button className="btn btn-primary hover:border hover:border-green-500 hover:bg-slate-200 hover:text-black border-0 text-white bg-green-500">
                  Confirm
                </button>
                <button className="btn hover:border hover:border-red-500 hover:bg-slate-200 hover:text-black btn-primary border-0 text-white bg-red-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
