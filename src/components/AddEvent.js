import React, { useState } from 'react';
import EventService from '../services/EventService';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const saveEvent = (e) => {
    e.preventDefault();
    EventService.createEvent(event).then(() => {
      navigate('/events');
    });
  };

  return (
    <div>
      <h2>Add Event</h2>
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
        <button className="btn btn-success" onClick={saveEvent}>Save</button>
      </form>
    </div>
  );
}

export default AddEvent;
