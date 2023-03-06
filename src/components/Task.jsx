import axios from "axios";

const Task = ({ item, getTasks }) => {
  const BASE_URL = "https://63fa2bf8beec322c57eeb667.mockapi.io/tasks";
  const { name, date, isDone, id } = item;
  const postIsDone = async () => {
    try {
      await axios.put(`${BASE_URL}/${id}/`, {
        ...item,
        isDone: !isDone,
      });
      console.log(isDone, id);
    } catch (error) {
      console.log(error);
    }
    getTasks();
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTasks();
  };

  return (
    <div className="container d-flex justify-content-between border border-success p-2 mt-2 text-start">
      <div className="w-100  " onClick={postIsDone}>
        <h5 className={isDone ? "text-decoration-line-through " : ""}>{name}</h5>
        <p className={isDone ? "text-decoration-line-through" : ""}>{date}</p>
      </div>
      <button className="btn btn-danger h-50" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default Task;
