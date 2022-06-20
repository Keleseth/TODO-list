import {useDispatch,useSelector} from 'react-redux'
import { completeTodo,removeTodo } from '../features/todoSlice'

const TodoItem = (props) => {
    const {id,text,check} = props
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos);

    function toggleCheck(id) {
      const complete = todos.filter((todo) => todo.id === id)
      dispatch(completeTodo(complete))
    }
    function deleteTodo(e) {
      e.preventDefault();
      const complete = todos.filter((todo) => todo.id === id)
      dispatch(removeTodo(complete))
    }
    return(
        <div className="todo_item">
          <div>
            {check ? <p><s>{text}</s></p>:<p>{text}</p>}
          </div>
          <div>
            <input type="checkbox" checked={check} onChange={() => toggleCheck(id)}/>
          </div> 
          <div>
            <button className='btn-del' type="submit" onClick={(e) => deleteTodo(e)}>Remove</button>
          </div>
        </div>
    )
}

export default TodoItem