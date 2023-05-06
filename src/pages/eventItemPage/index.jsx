import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import styled from 'styled-components';

const api = 'http://16.170.37.57/api/v1/app/event/'

const EventItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 800px;
`;

const EventItemTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const EventItemDesc = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const EventItemImage = styled.img`
  max-width: 500px;
  margin-bottom: 20px;
`;

export const EventItemPage = () => {
  const [event, setEvent] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`${api}${id}/detail`)
      .then(res => res.json())
      .then(data => {
        setEvent(data)
      })
  }, [])

  return (
    event ? (
      <EventItemContainer>
        <EventItemTitle>{event.name}</EventItemTitle>
        <EventItemDesc>{event.desc}</EventItemDesc>
        <EventItemImage src={event.img} alt={event.name} />
        <p>Date: {event.date}</p>
        <p>Location: {event.place}</p>
      </EventItemContainer>
    ) : (
      <div>Loading...</div>
    )
  )
}
