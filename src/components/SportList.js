import React, { useState, useEffect } from 'react';
import SportService from '../services/SportService';
import { useNavigate } from 'react-router-dom';

const SportList = () => {
  const [sports, setSports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    SportService.getSports().then((res) => {
      setSports(res.data);
    });
  }, []);

  const editSport = (id) => {
    navigate(`/update-sport/${id}`);
  };

  const deleteSport = (id) => {
    SportService.deleteSport(id).then(() => {
      setSports(sports.filter(sport => sport.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Sports List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sport Name</th>
              <th>Sport Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sports.map((sport) => (
              <tr key={sport.id}>
                <td>{sport.name}</td>
                <td>{sport.description}</td>
                <td>
                  <button onClick={() => editSport(sport.id)} className="btn btn-info">Update</button>
                  <button onClick={() => deleteSport(sport.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SportList;
