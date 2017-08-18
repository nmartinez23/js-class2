import shortid from 'shortid';

export default todo => {
  if ( typeof todo !== 'object' ) {
    return {
      id: shortid.generate(),
      title: todo,
    };
  }

  return {
    ...todo,
  };
};
