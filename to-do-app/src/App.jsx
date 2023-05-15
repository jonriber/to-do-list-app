import './App.css'
import ToDoApp from './components/ToDoApp'

function App() {

  return (
    <>
      
      <h1>To-do APP with Reducer and Context API</h1>
      <div className="card">
        <ToDoApp />
      </div>
      <p className="read-the-docs">
        Check the code at my github repo: <a href='https://github.com/jonriber/to-do-list-app'>HERE</a>
      </p>

      <footer><b>Jonatas Ribeiro</b>.2023#</footer>
    </>
  )
}

export default App
