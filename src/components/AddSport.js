import React, { useState } from 'react';
import SportService from '../services/SportService';
import { useNavigate } from 'react-router-dom';

const AddSport = () => {
  const [sport, setSport] = useState({
    name: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSport({ ...sport, [name]: value });
  };

  const saveSport = (e) => {
    e.preventDefault();
    SportService.createSport(sport).then(() => {
      navigate('/sports');
    });
  };

  return (
    <div>
      <h2>Add Sport</h2>
      <form>
        <div className="form-group">
          <label>Sport Name:</label>
          <input type="text" name="name" className="form-control" value={sport.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Sport Description:</label>
          <input type="text" name="description" className="form-control" value={sport.description} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={saveSport}>Save</button>
      </form>
    </div>
  );
}

export default AddSport;
