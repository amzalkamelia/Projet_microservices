import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const editUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  const deleteUser = (id) => {
    UserService.deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Users List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => editUser(user.id)} className="btn btn-info">Update</button>
                  <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
