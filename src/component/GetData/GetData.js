import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
import DeleteItem from '../DeleteItem/DeleteItem';
import Update from '../Update';

import './GetData.css'
const GetData = () => {
    const [data, setData] = useState([]);
    const [editItemId, setEditItemId] = useState(null);

    useEffect(() => {
      fetchData();
    }, []); 
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/items');
        setData(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    const handleDelete = (itemId) => {
        setData(prevData => prevData.filter(item => item._id !== itemId));
      };

      const handleEdit = (itemId) => {
        setEditItemId(itemId);
      };
    
      const handleUpdate = (updatedItem) => {
        setData(prevData =>
          prevData.map(item => (item._id === updatedItem._id ? updatedItem : item))
        );
        setEditItemId(null);
      };
  
    return (
      <div className='GetContainer'>
       
      
          {data.map(item => (
            <div  className="box" key={item._id}>
              <strong>Name:</strong> {item.name}<br />
              <strong>Email:</strong> {item.email}<br />
              <strong>Phone:</strong> {item.phone}<br />
              <strong>Address:</strong> {item.address}<br />
              <strong>Father's Name:</strong> {item.fathername}<br />

              <section className='deleteAndEditButton'>
                  
                 <DeleteItem itemId={item._id} onDelete={handleDelete} />
                  <button className='edit' onClick={() => handleEdit(item._id)}><AiOutlineEdit/></button>

              </section>
              {editItemId === item._id && (
            <div className="edit-form">
                <span>Editable Form</span>
              <Update item={item} onUpdate={handleUpdate} />
            </div>
          )}
            </div>
          ))}
       
      </div>
    );
}

export default GetData
