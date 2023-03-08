import clientPromise from "../../lib/mongodb"
import Image from "next/image"

export const getStaticProps = async(context) => {
    const {id}= context.params
    const client = await clientPromise
    const db = client.db('next-events-app')
    const res = await db.collection('all-events')
    .findOne({id: id})
    const event = await JSON.parse(JSON.stringify(res))


    return {
        props: {
            event
        }
    }

}


export const getStaticPaths = async()=>{
    const client = await clientPromise
    const db = client.db('next-events-app')
    const events = await db.collection('all-events')
    .find({})
    .toArray()

    const ids = events.map(event=> event.id)

    const paths = ids.map((id)=>({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }

    
}

const Event = ({event}) => {
  return (
    <div>
        <Image src={event.image} width={700} height={400}/>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
    </div>
  )
}

export default Event