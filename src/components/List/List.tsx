/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { TaskInterface } from '../../types/tasksApp.interface';
import Item from '../Item/Item';
import Search from '../Search/Search';
import { StyledList } from './Style';
import { searchValuesInterface } from '../../types/tasksApp.interface';

const List = ({ tasks, setTasks, setCancelDel }: { tasks: TaskInterface[], setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>, setCancelDel: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const [searchValues, setSearchValues] = useState({ searchValue: "", newestFirst: true, onlyCompleted: false } as searchValuesInterface)

  // FILTER TASKS BY TITLE
  function filterTasksByTitle(tasksList: TaskInterface[], searchValue: string) {
    const filteredTasks = tasksList.filter((task) => task.title.includes(searchValue))
    return filteredTasks
  }
  //sort tasks by date (id)
  function filterTasksByDate(tasksList: TaskInterface[], newestFirst: boolean) {
    const sortedTasks = tasksList.slice().sort((a, b) => newestFirst ? b.id - a.id : a.id - b.id)
    return sortedTasks
  }

  // sort tasks, show only completed
  function filterTasksByCompleted(tasksList: TaskInterface[]) {
    const filteredTasks = tasksList.filter((task) => task.completed === true)
    return filteredTasks
  }

  const sortedList = (() => {
    const { searchValue, newestFirst, onlyCompleted } = searchValues
    let filteredTasks: TaskInterface[] = [...tasks]
    if (searchValue.length > 0) { filteredTasks = filterTasksByTitle(filteredTasks, searchValue) }
    if (!newestFirst) { filteredTasks = filterTasksByDate(filteredTasks, newestFirst) }
    if (onlyCompleted) { filteredTasks = filterTasksByCompleted(filteredTasks) }
    return filteredTasks
  })()

  return (
    <div className="container">
      <Search sortedList={sortedList} searchValues={searchValues} setSearchValues={setSearchValues} />

      <StyledList>
        {sortedList.map((task) => (
          <Item key={task.id} task={task} tasks={tasks} setTasks={setTasks} setCancelDel={setCancelDel}>
          </Item>
        ))}
      </StyledList>
    </div>
  )
}

export default List