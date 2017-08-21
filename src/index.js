import TodoApp from './TodoApp';
import Todo from './Todo';

function onReady () {
  const app = TodoApp();
  const todo1 = Todo( 'First Todo' );
  const todo2 = Todo( 'Second Todo' );
  const todo3 = Todo( 'Third Todo' );
  todo2.toggleComplete();
  app.setTodos([ todo1, todo2, todo3 ]);

  const addTodoForm = document.getElementById( 'addTodoForm' );
  const todoList = document.getElementById( 'todoList' );
  const newTodoText = document.getElementById( 'newTodoText' );



  addTodoForm.addEventListener( 'submit', event => {
    event.preventDefault(); // no DOM reload
    const title = newTodoText.value;

    app.addTodo( title );
    newTodoText.value = '';
  });

  // ( state ) =>
  const renderTheUi = ( todos ) => {
    // <ul></ul>
    todoList.textContent = '';

    todos.forEach( todo => {
      // add it to the list
      // create an li
      // <li>{title}</li>
      const newLi = document.createElement( 'li' );
      newLi.textContent = todo.getTitle(); // vs newLi.innerHTML

      if ( todo.isComplete() ) {
        newLi.classList.add( 'todo--complete' );
      }

      newLi.addEventListener( 'click', () => {
        app.toggleComplete( todo.getId() );
      });

      // put it in the ul
      todoList.appendChild( newLi );
    });
  };

  app.subscribe( () => renderTheUi( app.getTodos() ) );
  renderTheUi( app.getTodos() );
}

if ( document.readyState !== 'loading' ) {
  onReady();
} else {
  document.addEventListener( 'DOMContentLoaded', onReady );
}

