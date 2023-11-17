import { useState, useEffect } from "react";

export const useFetchData = (url:string) => {
const [data, setData] = useState("")
const [error, setError] = useState(false)
const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async (url:string) => {
            setIsLoading(true);
            try{
                const response = await fetch(url)
                const data = await response.text()
                setData(data)
            } catch (error: any){
                setError(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchData(url)
    }, [])
    return {data, error, isLoading}
}
