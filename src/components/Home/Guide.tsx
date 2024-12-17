const Guide = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16">
        How to Book A Facility
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-300" />

        {/* Steps Container */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative">
            {/* Circle with Number */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold mb-6 z-10">
                1
              </div>
            </div>
            {/* Content Box */}
            <div className="bg-base-200 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
              <p className="text-base-content">
                If you are a new user register first. If your registration is
                successful, it will bring you into login page. Login and choose
                facility to book.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold mb-6 z-10">
                2
              </div>
            </div>
            <div className="bg-base-200 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
              <p className="text-base-content">
                When you select your desired facility, you can go to detail page
                and click 'book' button there.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold mb-6 z-10">
                3
              </div>
            </div>
            <div className="bg-base-200 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
              <p className="text-base-content">
                Fill up the form in the booking page with correct information.
                Double check the time conflict and choose your desired time to
                book hourly and proceed to pay.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold mb-6 z-10">
                4
              </div>
            </div>
            <div className="bg-base-200 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
              <p className="text-base-content">
                Congratulations! You have successfully booked a facility from
                Sport Haven
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
