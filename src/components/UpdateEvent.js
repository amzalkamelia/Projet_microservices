import React, { useState, useEffect } from 'react';
import EventService from '../services/EventService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    EventService.getEventById(id).then((res) => {
      setEvent(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const updateEvent = (e) => {
    e.preventDefault();
    EventService.updateEvent(event, event.id).then(() => {
      navigate('/events');
    });
  };

  return (
    <div>
      <h2>Update Event</h2>
      <form>
        <div className="form-group">
          <label>Event Name:</label>
          <input type="text" name="name" className="form-control" value={event.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Event Description:</label>
          <input type="text" name="description" className="form-control" value={event.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Event Date:</label>
          <input type="date" name="date" className="form-control" value={event.date} onChange={handleChange} />
        </div>
        <button className="btn btn-success" onClick={updateEvent}>Update</button>
      </form>
    </div>
  );
}

export default UpdateEvent;
