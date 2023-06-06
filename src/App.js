import logo from './logo.svg';
import './App.css';
import Content from './Component/Content'

import {useState} from 'react'

function App() {

  const [count, setCount] = useState(-1)
  const [name, setName] = useState('')

  const increment = () => {
    setCount(pre => pre + 1)
    setCount(pre => pre + 1)
  }
  const random = () => {
    const x = Math.random()*3
    setCount(Math.floor(x))
    setName(gift[Math.floor(x)] || "Chưa có phần thưởng")
  }
  const handleSubmit = () => {
    localStorage.setItem('toDoList', JSON.stringify(TodoList))
  }

  const gift = [
    'CPU i9',
    'RAM 32Gb',
    'RGB Keyboard'
  ]

  const courses = [
    {
      id: 0,
      name: "Html",
    },
    {
      id: 1,
      name: "Css",
    },
    {
      id: 2,
      name: "Javascript",
    }
  ]
  
  const [TodoInput, setToDoInput] = useState('')
  const [TodoList, setToDoList] = useState(() => {
    const toDoListLS = JSON.parse(localStorage.getItem('toDoList'))
    return toDoListLS ?? []
  })
  const addToDoList = (name) => {
    setToDoList([...TodoList, {
      name: TodoInput,
    }])
    setToDoInput('')
  }
  const removeToDoList = (index) => {
    setToDoList([...TodoList.slice(0, index),...TodoList.slice(index + 1)])
  }

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => {setShow(!show)}} >{!show ? 'Show' : 'Hide'}</button>
      {show && <Content index={count}/>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>TODO LIST</h1>
          <input
            value={TodoInput}
            onChange={e => setToDoInput(e.target.value)}
          />
          <button onClick={addToDoList}>ADD</button>
          <ul>
            {
              TodoList.map((todo, index) => (
                <div key={index} style={{display: 'flex'}}>
                  <li>{todo.name}</li>
                  <button onClick={() => {removeToDoList(index)}}>remove</button>
                </div>
              ))
            }
          </ul>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <p>
          {gift[count] || "Chưa có phần thưởng"} 
        </p>
        <button onClick={random}>Random</button>
        <button onClick={increment}>+</button>

        <input
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <select
          value={count}
          onChange={e => {
            setCount(e.target.value)
          }}
        >
          <option value={-1}>courses</option>
          {
            courses.map(course => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))
          }
        </select>
        <div style={{textAlign: 'left'}}>
          {
            courses.map(course => (
              <div key={course.id}>
                <input
                  type='radio'
                  checked={course.id === count}
                  onChange={e => setCount(course.id)}
                />
                {course.name}
              </div>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
