import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Dugme from "../components/Button";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import axios from "axios";

const initialTask = {
  name: "",
  date: 0,
  isDone: false,
};

const Home = () => {
  const BASE_URL = "https://63fa2bf8beec322c57eeb667.mockapi.io/tasks";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(initialTask);

  const showClose = () => {
    setShowAddTask(!showAddTask);
  };

  const getTasks = async () => {
    try {
      const { data } = await axios(BASE_URL);
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.id]: e.target.value });
    console.log(taskInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, taskInput);
    } catch (error) {
      console.log(error);
    }
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="home text-black  text-center d-flex justify-content-center">
      <div className="list p-5 border border-success bg-light d-flex flex-column m-4 w-50">
        <Header />
        <Dugme visible={showAddTask} onShow={showClose} />
        {showAddTask && (
          <AddTask handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
        <Tasks toDo={tasks} getTasks={getTasks} />
      </div>
    </div>
  );
};

export default Home;
