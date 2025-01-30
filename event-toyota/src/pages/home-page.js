import { useEffect } from "react"



export default function HomePage() {

    useEffect(() => {
        getApi()
    }, [])

    const getApi = async() => {
        try {
            let hitApi = await fetch("/api/users")
            let result = await hitApi.json()      
            console.log(result);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <>
            <h1>This is Home Page</h1>
        </>
    )
}