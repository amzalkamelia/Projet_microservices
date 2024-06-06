import React, { useState, useEffect } from 'react';
import PlanningService from '../services/PlanningService';
import { useNavigate } from 'react-router-dom';

const PlanningList = () => {
  const [plannings, setPlannings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    PlanningService.getPlannings().then((res) => {
      setPlannings(res.data);
    });
  }, []);

  const editPlanning = (id) => {
    navigate(`/update-planning/${id}`);
  };

  const deletePlanning = (id) => {
    PlanningService.deletePlanning(id).then(() => {
      setPlannings(plannings.filter(planning => planning.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Planning List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Planning Name</th>
              <th>Planning Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plannings.map((planning) => (
              <tr key={planning.id}>
                <td>{planning.name}</td>
                <td>{planning.description}</td>
                <td>
                  <button onClick={() => editPlanning(planning.id)} className="btn btn-info">Update</button>
                  <button onClick={() => deletePlanning(planning.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlanningList;
