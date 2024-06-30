/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import { TasksApp } from "./Style";
import { TaskInterface } from "../../types/tasksApp.interface";
import List from "../List/List";
import Title from "../Title/Title";
import CancelDel from "../CancelDel/CancelDel";
import Test from "../Test";

const App = () => {
  // TASK LIST
  const [tasks, setTasks] = useState<TaskInterface[]>(JSON.parse(localStorage.getItem("tasks") ?? "[]"))
  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks])

  //CANCEL DELETE
  const [cancelDel, setCancelDel] = useState(false)

  return (
    <TasksApp>

      <Title>Task App</Title>

      <Form tasks={tasks} setTasks={setTasks} />

      <List tasks={tasks} setTasks={setTasks} setCancelDel={setCancelDel} />

      <CancelDel setTasks={setTasks} cancelDel={cancelDel} setCancelDel={setCancelDel} />
    </TasksApp >
  );
};

export default App
