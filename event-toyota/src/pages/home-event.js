import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeEvent() {
    const [dataEvent, setDataEvent] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    useEffect(() => {
        getApi()
    }, [])

    const getApi = async() => {
        try {
            const data = await fetch("/api/event-data")
            const result = await data.json()

            console.log(result, "===> INI DATANYA YAA");
            setDataEvent(result.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let inputUser = {
            search: inputSearch
        }
        try {
            const requestData = await fetch(`/api/event-by-search?search=${inputSearch}`, {
                method: "POST",
                body: JSON.stringify(inputUser),
            })
            
            const result = await requestData.json()
            console.log(result.data, "==> INI APA MAS AMJAD");

            setDataEvent(result.data)
        } catch (error) {
            console.log(error, "==> INI ERROR");
             
        }
        // console.log(inputSearch, "==> INI HASIL DARI BUTTON");
        
    }

    const handleInputText = (valueData) => {
        console.log(valueData, "==> REQUEST PAK FATTAH");
        setInputSearch(valueData)
        
    }
    return(
        <>
            <h1>This is Home Event</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Search:</label>
                <input
                    // value={inputSearch}
                    type="text"
                    onChange={e => handleInputText(e.target.value)}
                />
                <input type="submit" value="Search yaa"/>
            </form>
            <ul>
                {
                    dataEvent.map(el => (
                        <>
                            <li key={el.id}>{el.title}</li>
                            <Link href={`/detail-event/${el.id}`}> Go to detail</Link>
                        </>
                    ))
                }
            </ul>
        </>
    )
}