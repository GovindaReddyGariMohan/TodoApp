import Todo from "./Todo";

const Todolist = ({ todoList, setTodoList }) => {
    return <div>{
        todoList.map((todoItem) => {
            return <Todo todoItem={todoItem} key={todoItem.id} todoList={todoList} setTodoList={setTodoList}></Todo>
        })
    }</div>
}
export default Todolist;