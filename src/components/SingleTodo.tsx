import { CheckCircleIcon, EditIcon, Trash2Icon } from "lucide-react"
import { Todo } from "../model"
import "./styles.css"
import { useState } from "react"

type Props = {
    todo: Todo,
    myTodos: Todo[],
    setMyTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({ todo, myTodos, setMyTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)


    const handleCheck = (id: number) => {
        setMyTodos(
            myTodos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    }

    const handleDelete = (id: number) => {
        setMyTodos(
            myTodos.filter((todo) => todo.id !== id)
        )
    }


    return (
        <form className="todos_single">
            {
                edit ? (<input type="input" placeholder="x"></input>

                ) : (
                    todo.isDone ? (
                        <s className="todos_text">{todo.todo}</s>
                    ) : (
                        <span className="todos_text">{todo.todo}</span>
                    )
                )
            }

            <div>
                <span className="icon">
                    <EditIcon onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit)
                        }
                    }} />
                </span>
                <span className="icon">
                    <Trash2Icon onClick={() => handleDelete(todo.id)} />
                </span>
                <span className="icon">
                    <CheckCircleIcon onClick={() => handleCheck(todo.id)} />
                </span>

            </div>
        </form>
    )
}

export default SingleTodo