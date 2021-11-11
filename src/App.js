import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Laks Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
