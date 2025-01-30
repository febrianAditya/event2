// import { useParams } from 'next/navigation'
// import { useRouter } from 'next/router'

export default function UserPage({result}) {
    console.log(result, "==> INI APA YAA");
    
    return(
        <>
            <h1>User Page</h1>
        </>
    )
}


export async function getServerSideProps(context) {
    const { id } = context.params
    // console.log(id);
    
    try {
        const hitApiJson = await fetch(`/api/users`)
        const result = await hitApiJson.json()
        return {
            props: {
                result 
            }
        }
    } catch (error) {
        console.log(error);
        
    }
}