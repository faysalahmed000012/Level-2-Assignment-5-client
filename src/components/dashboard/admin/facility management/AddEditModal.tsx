import React, { useCallback, useRef } from "react";
import { Button, Modal } from "react-daisyui";
import { FaImage } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import {
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
} from "../../../../redux/features/facility/facilityManagement.api";

const AddEditModal = ({ isEditMode, facility }) => {
  const [add] = useCreateFacilityMutation();
  const [edit] = useUpdateFacilityMutation();
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
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
      pricePerHour: Number(target.price.value),
      location: target.location.value,
      description: target.description.value,
    };

    try {
      let res;
      if (isEditMode) {
        res = await edit(facility);
      } else {
        res = await add(facility);
      }
      console.log(res);
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isEditMode ? (
        <Button
          className="btn bg-green-500 text-white hover:bg-slate-200 hover:border hover:border-green-500 hover:text-black"
          onClick={handleShow}
        >
          Edit
        </Button>
      ) : (
        <Button
          className="btn bg-green-500 text-white hover:bg-slate-200 hover:border hover:border-green-500 hover:text-black rounded-full"
          onClick={handleShow}
        >
          Create New Facility
        </Button>
      )}

      <Modal className="bg-slate-100 p-6 rounded-lg" ref={ref}>
        <form method="dialog">
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
          >
            x
          </Button>
        </form>
        <Modal.Header className="font-bold text-2lx text-center">
          {isEditMode ? "Edit" : "Create "} Facility
        </Modal.Header>
        <div>
          <div>
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
                    required
                    defaultValue={facility?.name}
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
                    required
                    defaultValue={facility?.imgUrl}
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
                    required
                    defaultValue={facility?.pricePerHour}
                    min={0}
                    name="price"
                    type="number"
                    className="grow"
                    placeholder="Price Per Hour"
                  />
                </label>
              </div>
              <div className="form-control">
                <textarea
                  required
                  defaultValue={facility?.location}
                  name="location"
                  className="textarea textarea-bordered"
                  placeholder="Location"
                ></textarea>
              </div>
              <div className="form-control">
                <textarea
                  required
                  defaultValue={facility?.description}
                  name="description"
                  className="textarea textarea-bordered"
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  {isEditMode ? "Edit" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddEditModal;
