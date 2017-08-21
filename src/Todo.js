import shortid from 'shortid';
import State from './mixins/state';
import compose from './compose';

const TodoPrototype = {
  getTitle () {
    return this.getState().title;
  },

  isComplete () {
    return this.getState().complete === true;
  },

  toggleComplete () {
    const { complete } = this.getState();
    return this.setState({ complete: ! complete });
  },

  setTitle ( title ) {
    return this.setState({ title });
  },

  getId () {
    return this.getState().id;
  },
};

export default todo => {
  if ( typeof todo !== 'object' ) {
    return {
      id: shortid.generate(),
      title: todo,
      compose: false,
    };
  }

  return compose( State( todo ), TodoPrototype );
};
