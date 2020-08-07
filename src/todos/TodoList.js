import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem';
import { removeTodo, markAsCompleted } from './actions';
import { displayAlert } from './thunks';
import './TodoList.css';

const TodoList = ( { todos = [], onRemovePressed, onCompletedPressed } ) => (
    <div className="list-wrapper">
        <h1>Todo</h1>
        <NewTodoForm />
        {todos.map(todo =>
          <TodoListItem
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed} />
        )}
    </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markAsCompleted(text)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
