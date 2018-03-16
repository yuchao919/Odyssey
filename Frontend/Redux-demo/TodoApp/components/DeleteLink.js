import React from 'react';

const DeleteLink = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    [x]
  </span>
);

export default DeleteLink;
