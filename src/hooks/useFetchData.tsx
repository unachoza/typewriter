import { useState, useEffect } from "react";

export const useFetchData = (url:string) => {
const [data, setData] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null)
const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async (url:string) => {
            setIsLoading(true);
            try{
                const response = await fetch(url)
                const data = await response.text()
                setData(data)
            } catch (error:any){
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        }

        fetchData(url)
    }, [])
    return {data, error, isLoading}
}
