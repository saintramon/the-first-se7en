import { useState, useEffect } from 'react'
import axios from "axios";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Babaero from './Babaero'

const App = () => {
  const [count, setCount] = useState(0);
  const [groupName, setGroupName] = useState("");

  const fetch = async () =>{
    const response = await axios.get("http://localhost:8080/HelloWorld")
    setGroupName(response.data.groupName)
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>WE ARE THE {groupName}</h1>
      <Babaero/>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
