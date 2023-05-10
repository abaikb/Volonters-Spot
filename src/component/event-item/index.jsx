import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


export const EventItem = ({ event }) => {
  const [use,setuse] = useState(false)
  const token = localStorage.getItem("token");
  console.log(token);
  function f() {

    setuse(!use)
  }
  return (
    
    <div className="event-list">
       {
          token ?       <NavLink className='create' to='/events/create'>создать события</NavLink>
          : <p>не</p>
        }
      <div className="event-item">
        <div className="event-title">{event.name}</div>
        <img className="event-img" src={event.img} alt="" />
        <p className="title">{event.desc}</p>
        <div> 
          <button>редактировать</button>
          <button onClick={f}>удалить</button>
        </div>
      
        <Link to={`/events/${event.id}`}>подробнее</Link>
      </div>
    </div>
  );
};
