import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ toDo, getTasks }) => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div>
      {toDo.map((item) => {
        return (
          <Task
            item={item}
            key={item.id}
            isFinished={isFinished}
            setIsFinished={setIsFinished}
            getTasks={getTasks}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
