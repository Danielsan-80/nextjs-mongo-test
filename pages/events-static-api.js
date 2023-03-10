

// export const getServerSideProps = async (context)=>{
//     const res = await fetch('http://localhost:3000/api/all-events')
//     const events = await res.json()

//     return {
//         props: {
//             data: events
//         }
//     }

// }

export const getStaticProps = async(context) => {

    // const nodeEnv = process.env.NODE_ENV

    // const url = nodeEnv === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL
    try {
        const res = await fetch('https://' + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/all-events');
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