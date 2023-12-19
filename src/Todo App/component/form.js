import { useState } from "react";
import styles from "../style.module.css";
import Todolist from "./Todolist";
import shortid from "shortid";
const Form = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    const handleChaing = (e) => {
        setTodo(e.target.value)
        //console.log(todo)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempList = todoList
        tempList.push({ name: todo, id: shortid.generate() });
        setTodoList(tempList)
        setTodo("")

    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput}
                    placeholder="Add Todo item"
                    value={todo}
                    onChange={handleChaing}
                />
                <button type="submit" className={styles.todobutton}>Add</button>

            </form>
            <Todolist todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}
export default Form;