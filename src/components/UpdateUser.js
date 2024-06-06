import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUserById(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const updateUser = (e) => {
    e.preventDefault();
    UserService.updateUser(user, user.id).then(() => {
      navigate('/users');
    });
  };

  return (
    <div>
      <h2>Update User</h2>
      <form>
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>User Email:</label>
          <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={updateUser}>Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
