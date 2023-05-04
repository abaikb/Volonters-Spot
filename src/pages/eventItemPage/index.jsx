import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { mockFetch } from "../../utils/mockFetch";


const api = '/events.json'

export const EventItemPage = () => {
    const [event, setEvent] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`${api}/event/${id}`)
        .then(res => res.json())
        .then(data => {
            setEvent(data)
        })
    }, []);
    console.log(event)

    return (
        <div>Events item Page</div>
    )
}