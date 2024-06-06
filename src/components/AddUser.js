import React, { useState } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    UserService.createUser(user).then(() => {
      navigate('/users');
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form>
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>User Email:</label>
          <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={saveUser}>Save</button>
      </form>
    </div>
  );
}

export default AddUser;
