import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useMakeAdminMutation } from "../../../redux/features/user/user.api";

const CreateAdmin = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [createAdmin] = useMakeAdminMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
      phone: { value: string };
      address: { value: string };
      photo: { files: Array<File> };
    };
    const data = new FormData();
    data.append("image", target.photo.files[0]);

    fetch(
      "https://api.imgbb.com/1/upload?key=4ca8d61eb15d4fc6432095a574f8850d",
      { method: "POST", body: data }
    )
      .then((res) => res.json())
      .then(async (data) => {
        const user = {
          name: target.name.value,
          email: target.email.value,
          password: target.password.value,
          phone: target.phone.value,
          address: target.address.value,
          photo: data?.data?.url,
        };
        try {
          const response = await createAdmin(user);
          if (response) {
            setLoading(false);
          }
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("An unknown error occurred");
          }
          setLoading(false);
        } finally {
          formRef.current!.reset();
          setPreviewImage(null);
        }
      });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create Admin Account</h1>
          <p className="text-base-content/70 mt-2">
            Add a new administrator to manage the system
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-base-100 rounded-box shadow-lg p-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <div className="flex flex-col items-center gap-4">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" />
                  ) : (
                    <div className="bg-base-300 w-full h-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-base-content/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                name="photo"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="faysal@example.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+(880) 1XXXXXXXXX"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  name="address"
                  className="textarea textarea-bordered h-32"
                  placeholder="Enter full address"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => {
                formRef.current!.reset();
                setPreviewImage(null);
              }}
              type="button"
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`btn btn-primary text-white ${
                loading ? "loading" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Admin Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
