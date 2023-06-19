import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
const Update = ({ item, onUpdate }) => {
    const [editedItem, setEditedItem] = useState({
        name: item.name,
        email: item.email,
        phone: item.phone,
        address: item.address,
        fathername: item.fathername
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prevItem => ({ ...prevItem, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:8080/api/items/${item._id}`, editedItem);
          onUpdate(response.data);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      };
    
      return (
        <form className='updateFrom' onSubmit={handleSubmit}>
          <input type="text" name="name" value={editedItem.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={editedItem.email} onChange={handleChange} placeholder="Email" required />
          <input type="text" name="phone" value={editedItem.phone} onChange={handleChange} placeholder="Phone" required />
          <input type="text" name="address" value={editedItem.address} onChange={handleChange} placeholder="Address" required />
          <input type="text" name="fathername" value={editedItem.fathername} onChange={handleChange} placeholder="Father's Name" required />
          <button type="submit">Update</button>
        </form>
      );
}

export default Update
