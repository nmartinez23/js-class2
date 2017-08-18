import shortid from 'shortid';

function Todo ( todo ) {
  if ( ! this ) {
    // What the 'new' keyword is doing:
    // todo = Object.create( Todo.prototype )
    // Todo.call( todo, testTodo );
    return new Todo( todo );
  }

  if ( typeof todo !== 'object' ) {
    this.id = shortid.generate();
    this.title = todo;
    this.complete = false;
  }
};

export default Todo;
