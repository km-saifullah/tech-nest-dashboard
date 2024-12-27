import { RxCross2 } from "react-icons/rx";

const EditCategoryModal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg space-y-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {children}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-600 rounded text-white flex items-center"
          >
            Close <RxCross2 className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryModal;
