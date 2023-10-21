import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigator = useNavigate()
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
      });
    
      const [isLoading, setIsLoading] = useState(false); 
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (isLoading) return;
    
        setIsLoading(true); 
    
        try {
          await axios.post('http://localhost:4000/auth/signup', formData)
          .then((response)=>{
            localStorage.setItem('user',JSON.stringify(response.data))
            navigator('/')
          })
    
          setFormData({
            name:'',
            email:'',
            password:''
          });
    
        } catch (error) {
          console.error('Error submitting data: ', error);
          alert('Error Logging in data');
        } finally {
          setIsLoading(false);
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className="add-student">
            <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )
}
