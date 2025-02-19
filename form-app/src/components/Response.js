import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Response = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state.formData;

  const handleEdit = () => {
    navigate("/form", { state: { formData } });
  };

  const handleDelete = () => {
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Response</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button
        onClick={handleEdit}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Response;
