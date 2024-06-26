/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { TaskInterface, searchValuesInterface } from '../../types/tasksApp.interface';
import { InputsWrapper, SearchResultMessage, SearchWrapper } from './Style';
import { CSSTransition } from 'react-transition-group';

const Search = ({ children, sortedList, searchValues, setSearchValues }: { children?: React.ReactNode, sortedList: TaskInterface[], searchValues: searchValuesInterface, setSearchValues: React.Dispatch<React.SetStateAction<searchValuesInterface>> }) => {
  const [showSearch, setShowSearch] = useState(false)



  return (
    <div className="container">
      <SearchWrapper>
        <SearchResultMessage>
          {sortedList.length} tasks found ({sortedList.filter((task) => task.completed).length} completed)
          <button type="button" onClick={() => setShowSearch(!showSearch)}>{showSearch ? "Hide" : "Show"} search</button>
          {children}
        </SearchResultMessage>

        {showSearch &&
          <InputsWrapper>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={searchValues.searchValue}
              onChange={(e) => setSearchValues((prev) => ({ ...prev, searchValue: e.target.value }))} />

            <label htmlFor="newestFirst">Newest first:</label>
            <input
              type="checkbox"
              id="newestFirst"
              checked={searchValues.newestFirst}
              onChange={(e) => setSearchValues((prev) => ({ ...prev, newestFirst: e.target.checked }))} />

            <label htmlFor="onlyCompleted">Only completed:</label>
            <input
              type="checkbox"
              id="onlyCompleted"
              checked={searchValues.onlyCompleted}
              onChange={(e) => setSearchValues((prev) => ({ ...prev, onlyCompleted: e.target.checked }))} />
          </InputsWrapper>
        }

      </SearchWrapper>
    </div>
  )
}

export default Search