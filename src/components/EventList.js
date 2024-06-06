import React, { useState, useEffect } from 'react';
import EventService from '../services/EventService';
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);

  const editEvent = (id) => {
    navigate(`/update-event/${id}`);
  };

  const deleteEvent = (id) => {
    EventService.deleteEvent(id).then(() => {
      setEvents(events.filter(event => event.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Event List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Description</th>
              <th>Event Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>
                  <button onClick={() => editEvent(event.id)} className="btn btn-info">Update</button>
                  <button onClick={() => deleteEvent(event.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventList;
