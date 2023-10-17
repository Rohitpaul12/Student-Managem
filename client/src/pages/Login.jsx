import React from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    username:'',
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
      const response = await axios.post('http://localhost:4000/auth/login', formData)
      .then(()=>{
        localStorage.setItem('user',response)
      })

      setFormData({
       username:'',
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
        name="username"
        placeholder="Username"
        value={formData.username}
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
