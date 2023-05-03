import "./style.css";
import { Link } from "react-router-dom";

export const EventItem = ({ event }) => {
  return (
      <div className="event-list">
        <div className="event-item">
          <div className="event-title">{event.name}</div>
          <img className="event-img" src={event.image} alt="" />
          <p className="title">{event.desc}</p>
          <Link to={`/events/${event.id}`}>подробнее</Link>
        </div>
      </div>
  );
};
