const Guide = () => {
  return (
    <div className="mt-20 mb-10">
      <h2 className="text-2xl mb-10 text-center">How to Book A Facility</h2>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-neutral">
          <div className="bg-gray-200 rounded-lg py-6 px-3 mb-4 max-w-[70%]">
            <p className="text-center font-medium">
              If you are a new user register first. If your registration is
              successful, it will bring you into login page. Login and choose
              facility to book.
            </p>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="bg-gray-200 rounded-lg py-6 px-3 mb-4 max-w-[70%]">
            <p className="text-center font-medium">
              When you select your desired facility, you can go to detail page
              and click 'book' button there.
            </p>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="bg-gray-200 rounded-lg py-6 px-3 mb-4 max-w-[70%]">
            <p className="text-center font-medium">
              Fill up the form in the booking page with correct information.
              Double check the time conflict and choose your desired time to
              book hourly and proceed to pay.
            </p>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="bg-gray-200 max-w-[70%] rounded-lg py-6 px-3 mb-4">
            <p className="text-center font-medium">
              Congratulations! You have successfully booked a facility from
              Sport Haven
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Guide;

/*
   <div className="flex flex-col items-center bg-blue-50 p-10">
        <h2 className="text-3xl font-bold mb-10 relative text-center">
          How to Book A Facility
        </h2>
        <div className="flex-col">
         
          <div className="md:flex items-center mb-10">
            <div className="bg-gray-200 rounded-lg p-6 mb-4 relative w-[60%]">
              <p className="bg-secondary text-white rounded-full w-6 h-6 text-center absolute -top-2 -left-2">
                1
              </p>
              <p className="text-center font-medium">
                Verbinde deinen Shop mit wenigen Klicks
              </p>
            </div>
            <div className=" lg:h-1 w-full bg-gray-500"></div>
          </div>

        //    Step 2 
          <div className=" md:flex items-center mb-10">
            <div className="bg-gray-200 rounded-lg p-6 mb-4 relative w-[60%]">
              <p className="bg-secondary text-white rounded-full w-6 h-6 text-center absolute -top-2 -left-2">
                1
              </p>
              <p className="text-center font-medium">
                Verbinde deinen Shop mit wenigen Klicks
              </p>
            </div>
            <div className="lg:h-1 w-full bg-gray-500"></div>
          </div>

          Step 3 
          <div className=" md:flex items-center mb-10">
            <div className="bg-gray-200 rounded-lg p-6 mb-4 relative w-[60%]">
              <p className="bg-secondary text-white rounded-full w-6 h-6 text-center absolute -top-2 -left-2">
                1
              </p>
              <p className="text-center font-medium">
                Verbinde deinen Shop mit wenigen Klicks
              </p>
            </div>
            <div className="lg:h-1 w-full bg-gray-500"></div>
          </div>

         Step 4 
          <div className=" md:flex items-center mb-10">
            <div className="bg-gray-200 rounded-lg p-6 mb-4 relative w-[60%]">
              <p className="bg-secondary text-white rounded-full w-6 h-6 text-center absolute -top-2 -left-2">
                1
              </p>
              <p className="text-center font-medium">
                Verbinde deinen Shop mit wenigen Klicks
              </p>
            </div>
            <div className=" lg:h-1 w-full bg-gray-500"></div>
          </div>

           Step 5 
          <div className=" md:flex items-center mb-10">
            <div className="bg-gray-200 rounded-lg p-6 mb-4 relative w-[60%]">
              <p className="bg-secondary text-white rounded-full w-6 h-6 text-center absolute -top-2 -left-2">
                1
              </p>
              <p className="text-center font-medium">
                Verbinde deinen Shop mit wenigen Klicks
              </p>
            </div>
          </div>
        </div>
      </div>
 */
