import React, { useState } from "react";
import Form from "./form";
import Task from "./task";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") {
      alert("You need to add something");
      return;
    }
    const newTask = {
      id: Date.now(),
      task,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2
                className="text-center poppins-thin"
                style={{ color: "red", fontSize: "110px" }}
              >
                To do list
              </h2>
              <div className="border border-top-0 px-4 py-3">
                <Form addTask={addTask} />
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    deleteTask={deleteTask}
                  />
                ))}
                <div className="row poppins-thin text-center mt-3">
                  <div className="col">{tasks.length} Item en la lista</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
