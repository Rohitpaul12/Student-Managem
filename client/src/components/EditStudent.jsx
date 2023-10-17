import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function EditStudent() {
    let { id } = useParams();
    let navigator  =  useNavigate();

    const [formData, setFormData] = useState({
        roll: '',
        name: '',
        email: '',
        contact: '',
        address: '',
        gender: '',
    });

    const [isLoading, setIsLoading] = useState(false); // Add a loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) return; // Prevent multiple submissions while loading

        setIsLoading(true); // Set loading state

        try {
            // Send the form data to your server using Axios
            await axios.post('http://localhost:4000/student/update', formData).then(()=>{
                navigator("/")
            })

            setFormData({
                roll: '',
                name: '',
                email: '',
                contact: '',
                address: '',
                gender: '',
            });

            alert('Data Updated successfully');
        } catch (error) {
            console.error('Error submitting data: ', error);
            alert('Error In Update data');
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };



    const [data, setData] = useState();

    async function fetchStudent() {
        try {
            await axios.get(`http://localhost:4000/student/${id}`)
                .then((response) => {
                    // setData(response.data)
                    console.log(response);
                    setFormData(response.data)
                })
        } catch (error) {
            console.log({ error: error });
        }
    }
    useEffect(() => {
        fetchStudent()
    }, [])
    return (
        <form onSubmit={handleSubmit} className="add-student">

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="contact"
                placeholder="Mobile"
                value={formData.contact}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
            />
            <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update'}
            </button>
        </form>
    )
}
