import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          className="form-control input poppins-extralight fs-4 w-100 mb-3"
          type="text"
          placeholder="What needs to be done?"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </div>
    </form>
  );
};

export default Form;
