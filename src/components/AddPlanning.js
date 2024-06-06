import React, { useState } from 'react';
import PlanningService from '../services/PlanningService';
import { useNavigate } from 'react-router-dom';

const AddPlanning = () => {
  const [planning, setPlanning] = useState({
    name: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanning({ ...planning, [name]: value });
  };

  const savePlanning = (e) => {
    e.preventDefault();
    PlanningService.createPlanning(planning).then(() => {
      navigate('/plannings');
    });
  };

  return (
    <div>
      <h2>Add Planning</h2>
      <form>
        <div className="form-group">
          <label>Planning Name:</label>
          <input type="text" name="name" className="form-control" value={planning.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Planning Description:</label>
          <input type="text" name="description" className="form-control" value={planning.description} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={savePlanning}>Save</button>
      </form>
    </div>
  );
}

export default AddPlanning;
