const Message = () => {
  return (
    <div>
      <div className="divider"></div>
      <h1 className="mt-10 mb-6 text-2xl text-center">Get in Touch</h1>
      <div>
        <div className="hero min-h-[60%]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Send Us Your Thought</h1>
              <p className="py-6 lg:max-w-[70%]">
                We would love to hear what you think about us. Does not matter
                if you are our customer or not, if you have any suggestion or
                anything to say, tell us here.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-2xl text-white">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
