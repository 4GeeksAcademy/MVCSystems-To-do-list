import React from "react";

const Task = ({ id, task, deleteTask }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <p className="poppins-extralight fs-4 mb-0">{task}</p>
      <button className="btn btn-danger" onClick={() => deleteTask(id)}>
        X
      </button>
    </div>
  );
};

export default Task;
