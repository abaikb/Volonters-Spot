import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const EventItem = ({ event }) => {
  const [use, setUse] = useState(false);

  function f() {
    setUse(!use);
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
            <button className="eventDelete" onClick={f}>Удалить</button>
          </div>

          <Link to={`/events/${event.id}`} className="eventMore">Подробнее...</Link>
        </div>
      </div>
    </div>
  );
};
