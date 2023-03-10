

// export const getServerSideProps = async (context)=>{
//     const res = await fetch('http://localhost:3000/api/all-events')
//     const events = await res.json()

//     return {
//         props: {
//             data: events
//         }
//     }

// }

export const getServerSideProps = async(context) => {
    try {
        const res = await fetch('/api/all-events');
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

const EventsServerApi = ({data}) => {
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

export default EventsServerApi