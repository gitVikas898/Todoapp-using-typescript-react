import { CheckCircleIcon, DeleteIcon, EditIcon } from "lucide-react"
import { Todo } from "../model"
import "./styles.css"

type Props = {
    todo:Todo,
    myTodos:Todo[],
    setMyTodos :React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,myTodos,setMyTodos}:Props) => {
  return (
    <form className="todos_single">
        <span className="todos_text">{todo.todo}</span>
        <div>
            <span className="icon">
                <EditIcon/>
            </span>
            <span className="icon">
                <DeleteIcon/>
            </span>
            <span className="icon">
                <CheckCircleIcon/>
            </span>

        </div>
    </form>
  )
}

export default SingleTodo