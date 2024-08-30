import AddEditModal from "./AddEditModal";

const Controllers = ({ setLimit }) => {
  return (
    <div>
      <div className="mt-10 mb-6 lg:flex justify-between">
        <AddEditModal isEditMode={false} facility={null} />
        <select
          onChange={(e) => setLimit(e.target.value)}
          className="select select-bordered w-full max-w-xs rounded-full my-3 md:my-0"
        >
          <option value={5}>5 items per page</option>
          <option selected value={10}>
            Items Per Page (Default 10)
          </option>
          <option value={20}>20 items per page</option>
        </select>
      </div>
    </div>
  );
};

export default Controllers;
