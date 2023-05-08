import "./style.css";
import { Link, NavLink } from "react-router-dom";


export const EventItem = ({ event }) => {
  return (
    
    <div className="event-list">
      <NavLink className='create' to='/events/create'>создать события</NavLink>
      <div className="event-item">
        <div className="event-title">{event.name}</div>
        <img className="event-img" src={event.img} alt="" />
        <p className="title">{event.desc}</p>
        <div> 
          <button>редактировать</button>
          <button>удалить</button>
        </div>
        <Link to={`/events/${event.id}`}>подробнее</Link>
      </div>
    </div>
  );
};
