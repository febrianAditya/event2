import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function UserPage() {
    // const router = useRouter();
    const router = useRouter()
    const { id } = router.query

    console.log(id, "==> ini apa yaa");
    
    // const { id } = router.query; // Ambil 'id' dari params
    
    // useEffect(() => {
    //     getApi()
    // }, [id])

    useEffect(() => {
        // console.log(id, "==> ini apa yaa");
        getApi()
    }, [id])


    console.log(id, "==> ini apa yaa 222");

    const getApi = async() => {
        try {
            let data = await fetch(`/api/user/${id}`)
            // let result = await data.json()
            // console.log(result, "==> INI APA YAA");
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <h1>User ID: {id}</h1>
        </div>
    );
}
