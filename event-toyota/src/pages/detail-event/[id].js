import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function DetailEvent() {
    const [dataById, setDataById] = useState({})
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        console.log(id, "===> APA SIH");

        getById()
    }, [id])

    const getById = async () => {
        try {
            const data = await fetch(`/api/event-id/${id}`)
            const result = await data.json()
            setDataById(result.data)
            
        } catch (error) {
            console.log(error, "==> ini 2");
            
        }
    }

    

    return(

        <>
            <h3>This is Detaol Event {id} Toyota</h3>
            <Link href={`/home-event`}>Back</Link>
            <p>{JSON.stringify(dataById)}</p>
        </>
    )
}