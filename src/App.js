import logo from './logo.svg';
import taskList from './data/taskList.json'
import Card from './components/Card.jsx'
import Tasks from './components/Tasks.jsx';
import CreateEntry from './components/CreateEntry.jsx'

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        setAllTasks(taskList?.tasks)

    }, [])

  return (
    <div className="App">
      <main className='taskView'>
        <CreateEntry setAllTasks={setAllTasks}/>
        <Tasks allTasks={allTasks}/>
      </main>
    </div>
  );
}

export default App;
