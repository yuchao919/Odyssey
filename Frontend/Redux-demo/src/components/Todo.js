import React from 'react';
import PropTypes from 'prop-types';

import DeleteLink from './DeleteLink';

const Todo = ({ id, onClick, completed, text, onDeleteClick }) => (
  <li>
    <DeleteLink onClick={onDeleteClick} />
    <span onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
