import clientPromise from "../lib/mongodb"


export const getServerSideProps = async (context)=>{
    try {
        const client = await clientPromise;
        const db = client.db("next-events-app");
 
        const events = await db
            .collection("all-events")
            .find({})
            .toArray();

        
        return {
            props: {
                data: JSON.parse(JSON.stringify(events))
            }
        }
 
        
    } catch (e) {
        console.error(e);
    }

   

}

// export const getStaticProps = async(context) => {
//     const res = await fetch('http://localhost:3000/api/all-events')
//     const events = await res.json()

//     return {
//         props: {
//             data: events
//         }
//     }
// }

const EventsServer = ({data}) => {
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

export default EventsServer