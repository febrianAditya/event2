import { useEffect } from "react"

export default function DetailPage() {

    useEffect(() => {
        getUserDetail()
    }, [])

    const getUserDetail = async () => {
        try {
            const data = await fetch("/api/user/3")
            console.log(data, "==> INI");
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <h1>
                This is Detail Page
            </h1>
        </>
    )
}