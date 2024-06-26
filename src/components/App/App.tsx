/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { TasksApp } from "./Style";
import Btn from "../Btn/Btn";
import { TaskInterface } from "../../types/tasksApp.interface";
import List from "../List/List";
import Title from "../Title/Title";
import CancelDel from "../CancelDel/CancelDel";
import { FormEvent } from "react";

const App = () => {
  // CURRENT TASK
  const [currectTask, setCurrectTask] = useState(localStorage.getItem("currectTask") ?? "")
  useEffect(() => { localStorage.setItem("currectTask", currectTask) }, [currectTask])

  // TASK LIST
  const [tasks, setTasks] = useState<TaskInterface[]>(JSON.parse(localStorage.getItem("tasks") ?? "[]"))
  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks])

  // SUBMIT CURRENT TASK
  function submit() {
    if (currectTask) {
      const values = tasks.map((task) => task.title)
      if (values.includes(currectTask)) {
        alert("Task already exists")
      } else {
        setTasks([{ id: Date.now(), title: currectTask.trim(), completed: false }, ...tasks])
        setCurrectTask("")
      }
    }
  }

  // RESET CURRENT TASK
  function reset() {
    setCurrectTask("")
  }

  //CANCEL DELETE
  const [cancelDel, setCancelDel] = useState(false)

  //FILTER TASKS


  return (
    <TasksApp>
      <Title>Task App</Title>

      <Form>
        <Input type="text" placeholder="Type here" value={currectTask} onChange={(e: FormEvent<HTMLInputElement>) => setCurrectTask(e.currentTarget.value)}>
          <Btn type="submit" onClick={submit}>Add</Btn>
          <Btn type="reset" onClick={reset}>Reset</Btn>
        </Input>
      </Form >

      <List tasks={tasks} setTasks={setTasks} setCancelDel={setCancelDel} />
      <CancelDel setTasks={setTasks} cancelDel={cancelDel} setCancelDel={setCancelDel} />
    </TasksApp >
  );
};

export default App
