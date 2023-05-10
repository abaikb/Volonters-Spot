import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


export const EventItem = ({ event }) => {
  const [use, setUse] = useState(false);
  // const token = localStorage.getItem("token");

  function f() {
    setUse(!use);
  }

  return (
    <div>
       {/* {token ? (
        <NavLink className="create" to="/events/create">
          создать события
        </NavLink>
      ) : (
        <p>не</p>
      )} */}
      <div className="event-list">
        <div className="event-item">
          <div className="event-title">{event.name}</div>
          <img className="event-img" src={event.img} alt="" />
          <p className="title">{event.desc}</p>
          <div>
<<<<<<< HEAD
            <Link to={`/events/edit`}><button>редактировать</button></Link>
            <button onClick={f}>удалить</button>
=======
            <button className="eventChange">Редактировать</button>
            <button className="eventDelete" onClick={f}>Удалить</button>
>>>>>>> refs/remotes/origin/main
          </div>

          <Link to={`/events/${event.id}`} className="eventMore">Подробнее...</Link>
        </div>
      </div>
    </div>
  );
};
