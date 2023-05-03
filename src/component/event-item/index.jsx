import "./style.css";
import { Link } from "react-router-dom";

export const EventItem = ({ event }) => {
  return (
    <div>
      <div>{event.name}</div>
      <Link to={`/events/${event.id}`}>more info</Link>
    </div>
  );
};
