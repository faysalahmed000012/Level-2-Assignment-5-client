import React from "react";
import { FaImage } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";

const AddEditModal = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      imgUrl: { value: string };
      price: { value: number };
      location: { value: string };
      description: { value: string };
    };
    const facility = {
      name: target.name.value,
      imgUrl: target.imgUrl.value,
      price: target.price.value,
      role: "user",
      location: target.location.value,
      description: target.description.value,
    };
    console.log(facility);
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-green-500 py-3 px-6 text-white rounded-full hover:border hover:border-green-500 hover:text-black hover:bg-slate-100"
        onClick={() => document.getElementById("my_modal_3")!.showModal()}
      >
        Create New Facility
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <p className="text-center text-2xl">Add Facility</p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  name="name"
                  type="text"
                  className="grow"
                  placeholder="FullName"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <FaImage className="text-[#5b5b5b]" />
                <input
                  name="imgUrl"
                  type="text"
                  className="grow"
                  placeholder="Image Url"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <IoPricetags className="text-[#5b5b5b]" />
                <input
                  name="price"
                  type="number"
                  className="grow"
                  placeholder="Price Per Hour"
                />
              </label>
            </div>
            <div className="form-control">
              <textarea
                name="location"
                className="textarea textarea-bordered"
                placeholder="Location"
              ></textarea>
            </div>
            <div className="form-control">
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Description"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddEditModal;
