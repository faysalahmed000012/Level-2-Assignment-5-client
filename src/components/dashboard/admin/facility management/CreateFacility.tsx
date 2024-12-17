import React, { useState } from "react";

const CreateFacilityForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      location: { value: string };
      description: { value: string };
      price: { value: string };
    };

    // Simulating form submission
    setTimeout(() => {
      console.log({
        name: target.name.value,

        location: target.location.value,
        description: target.description.value,
        price: parseInt(target.price.value),

        images: images,
      });
      setLoading(false);
      // Reset form here if needed
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create New Facility</h1>
          <p className="text-base-content/70 mt-2">
            Add a new sports facility to your venue
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-base-100 shadow-xl rounded-box p-6 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Facility Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Main Basketball Court"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g. 123 Sports Avenue, Springfield"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Describe the facility, its features, and amenities"
              required
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price per Hour ($)</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 50"
                className="input input-bordered"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Facility Images</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Facility ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="btn btn-circle btn-xs absolute top-1 right-1 bg-base-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Facility"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFacilityForm;
