import React from 'react';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const DeleteItem = ({ itemId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/items/${itemId}`);
      onDelete(itemId);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <button className='delete' onClick={handleDelete}>
      <AiFillDelete />
    </button>
  );
};

export default DeleteItem;
