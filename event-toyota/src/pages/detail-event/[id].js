import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"

export default function DetailEvent() {
    const [dataById, setDataById] = useState({})
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
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
            <Head>
                <title>Detail Event Febri {id} | Toyota</title>
                <meta name="description" content={`Detail event ${id} dari Event Toyota`} />
                <meta name="keywords" content="event, malam minggu, event sabtu" />
            </Head>
            <h3>This is Detaol Event {id} Toyota</h3>
            <Link href={`/home-event`}>Back</Link>
            <p>{JSON.stringify(dataById)}</p>
        </>
    )
}