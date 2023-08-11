import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({})
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/auth/login/', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (

    <div className="w-64 p-2 pt-4  rounded ">
      <form className="flex w-full flex-col flex gap-1" onSubmit={handleSubmit} >
        <label className='text-sm' htmlFor="name">Name</label>
        <input className='border-2 rounded' type='text' name='name' onChange={handleChange}></input>
        <label className='text-sm' htmlFor="password">Password</label>
        <input className='border-2 rounded' type='password' name='password' onChange={handleChange}></input>
        <button className="p-px bg-teal-500 rounded background text-white text-lg mt-2" type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
