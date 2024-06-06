import React, { useState, useEffect } from 'react';
import PlanningService from '../services/PlanningService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePlanning = () => {
  const { id } = useParams();
  const [planning, setPlanning] = useState({
    name: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    PlanningService.getPlanningById(id).then((res) => {
      setPlanning(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanning({ ...planning, [name]: value });
  };

  const updatePlanning = (e) => {
    e.preventDefault();
    PlanningService.updatePlanning(planning, planning.id).then(() => {
      navigate('/plannings');
    });
  };

  return (
    <div>
      <h2>Update Planning</h2>
      <form>
        <div className="form-group">
          <label>Planning Name:</label>
          <input type="text" name="name" className="form-control" value={planning.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Planning Description:</label>
          <input type="text" name="description" className="form-control" value={planning.description} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={updatePlanning}>Update</button>
      </form>
    </div>
  );
}

export default UpdatePlanning;
