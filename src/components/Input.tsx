import { useRef } from 'react';
import './styles.css'


interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void;  //because this function return nothing
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {


    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}
        >
            <input ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} type="input" placeholder="Enter a task" className="input_box" />
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default Input