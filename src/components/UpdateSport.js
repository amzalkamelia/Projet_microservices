import React, { useState, useEffect } from 'react';
import SportService from '../services/SportService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateSport = () => {
  const { id } = useParams();
  const [sport, setSport] = useState({
    name: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    SportService.getSportById(id).then((res) => {
      setSport(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSport({ ...sport, [name]: value });
  };

  const updateSport = (e) => {
    e.preventDefault();
    SportService.updateSport(sport, sport.id).then(() => {
      navigate('/sports');
    });
  };

  return (
    <div>
      <h2>Update Sport</h2>
      <form>
        <div className="form-group">
          <label>Sport Name:</label>
          <input type="text" name="name" className="form-control" value={sport.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Sport Description:</label>
          <input type="text" name="description" className="form-control" value={sport.description} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={updateSport}>Update</button>
      </form>
    </div>
  );
}

export default UpdateSport;
