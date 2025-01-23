import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
import "./styles.css"

interface Props{
    myTodos:Todo[],
    setMyTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({myTodos,setMyTodos}:Props) => {
  return (
    <div className="todos">
        {myTodos.map((todo)=>(
            <SingleTodo 
            todo={todo} 
            key={todo.id}
            myTodos={myTodos}
            setMyTodos={setMyTodos}
            />
        ))}
    </div>
  )
}

export default TodoList