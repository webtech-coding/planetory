import { useEffect, useState } from "react"
import type { IPOD } from "../contstants/types";

const useFetch=(url:string)=>{
    console.log(url)
    const [error,setError] = useState<boolean>(false);
    const [data,setData] = useState<IPOD | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
        const fetchFromApi = async ()=>{
            setLoading(true)
            try {
                const response = await fetch(url)
                const resposeData = await response.json();
                console.log(resposeData)
                setData(resposeData)

            } catch (error) {
                setError(true)
            }finally{
                setLoading(false)
            }
        }

        fetchFromApi();

    },[])

    return {error, loading, data}
}

export default useFetch;