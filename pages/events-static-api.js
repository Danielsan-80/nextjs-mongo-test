

export const getStaticProps = async(context) => {

    const url = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SITE_URL : 'https://'+ process.env.NEXT_PUBLIC_VERCEL_URL

    try {
        const res = await fetch(url + '/api/all-events');
        const events = await res.json()
    

        return {
            props: {
                data: events
            }
        }

    } catch (e) {
        console.error(e);
    }
}

const EventsStaticApi = ({data}) => {
  return (

    <div>
    {data.map(event=> (
        <li key={event._id}>
            <h1>{event.title}</h1>
            <p>{event.city}</p>
            <p>{event.description}</p>
        </li>
    ))}
    
    </div>
  )
}

export default EventsStaticApi