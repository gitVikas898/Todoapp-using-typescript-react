import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { Todo } from './model'

//Types in Typescript 


const App : React.FC = () =>{

  const [todo,setTodo] = useState<string>("")

  const [myTodos,setMyTodos] = useState<Todo[]>([]); //creating an array of interface;



  const handleAdd=(e:React.FormEvent)=>{
      e.preventDefault();

      if(myTodos){
        setMyTodos([...myTodos,{id:Date.now(),todo:todo,isDone:false}]);
        setTodo("");
      }
  }

  console.log(myTodos);

  return (
    <div className='App'>
          <h1 className='heading'>Taskify</h1>
          <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList/>
    </div>
  )
}
export default App
