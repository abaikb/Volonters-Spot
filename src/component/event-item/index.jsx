import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const EventItem = ({ event }) => {
  const [setDelete, setUse] = useState(false);
  const token = localStorage.getItem('token');

  function handleDelete() {
    fetch(`http://16.170.37.57/api/v1/app/event/${event.id}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${token}`
      },
    })
    
    .then(response => {
      // handle the response from the server
      if (response.ok) {
        window.location.reload();
      }
    })
    .catch(error => {
      // handle errors
    });
  }

  return (
    <div>
      <div className="event-list">
        <div className="event-item">
          <div className="event-title">{event.name}</div>
          <img className="event-img" src={event.img} alt="" />
          <p className="title">{event.desc}</p>
          <div>
            <Link to={`/events/edit/${event.id}`}><button className="eventChange">Редактировать</button></Link>
            <button className="eventDelete" onClick={handleDelete}>Удалить</button>
          </div>

          <Link to={`/events/${event.id}`} className="eventMore">Подробнее...</Link>
        </div>
      </div>
    </div>
  );
};
