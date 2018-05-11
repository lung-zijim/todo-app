import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_COMPLETED":
            // t 是未声明的。
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
        case "SHOW_ALL":
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;

