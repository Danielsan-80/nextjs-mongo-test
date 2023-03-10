import clientPromise from "../../lib/mongodb"

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

const EventsStatic = ({data}) => {
  return (

    <div>
    {data.map(event=> (
        <li key={event._id}>
            <a href={"/events/" + event.id}>
            <h1>{event.title}</h1>
            <p>{event.city}</p>
            <p>{event.description}</p>
            </a>
        </li>
        
    ))}
    <p>hey</p>
    </div>
  )
}

export default EventsStatic