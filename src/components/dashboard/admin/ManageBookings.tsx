const ManageBookings = () => {
  const arr1 = new Array(9).fill("*");
  return (
    <div>
      <h1 className="text-2xl mt-10 ms-10">All Bookings : </h1>
      <div className="ms-10 grid lg:grid-cols-3 gap-6">
        {arr1.map((item) => (
          <div
            key={item}
            className=" ms-1 lg:ms-10 mt-6 p-6 bg-base-200 rounded-xl grid lg:grid-cols-1 gap-6"
          >
            <div className="flex flex-col  items-center justify-around gap-7">
              <div>
                <h1 className="text-xl lg:text-2xl">Cricket Field</h1>
                <p className="max-w-[214px]">456 Sports Ave, Springfield.</p>
              </div>
              <div className="w-full">
                <p>Time : 15:00 - 16:00</p>
                <p>Payable Amount : $446</p>
              </div>
              <div className="">
                <p className="text-xl text-red-500">Status : Unpaid</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
