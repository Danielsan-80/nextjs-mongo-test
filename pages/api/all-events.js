import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("next-events-app");
 
        const events = await db
            .collection("all-events")
            .find({})
            .toArray();
 
        res.status(200).json(events);
    } catch (e) {
        console.error(e);
    }
 };