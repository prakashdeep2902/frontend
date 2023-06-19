import React, { useState } from 'react';
import axios from 'axios';
import './Insert.css'


const Insert = () => {
    const [item, setItem] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        fathername: ''
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({ ...prevItem, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/items', item);
            console.log(response.data);
        
            setItem({
                name: '',
                email: '',
                phone: '',
                address: '',
                fathername: '' 
              });
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };
    return (
        <>

            <div className='conatiner'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
                    <input type="email" name="email" value={item.email} onChange={handleChange} placeholder="Email" required />
                    <input type="text" name="phone" value={item.phone} onChange={handleChange} placeholder="Phone" required />
                    <input type="text" name="address" value={item.address} onChange={handleChange} placeholder="Address" required />
                    <input type="text" name="fathername" value={item.fathername} onChange={handleChange} placeholder="Father's Name" required />
                    <button type="submit">Create Item</button>
                </form>
            </div>
        </>

    )
}

export default Insert
