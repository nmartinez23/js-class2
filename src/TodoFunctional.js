import shortid from 'shortid';

export default t => {
  let todo = t;

  if (typeof t !== 'object' ) {
    todo = {
      id: shortid.generate(),
      title: t,
      complete: false,
    };
  }
};
