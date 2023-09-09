import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get(url)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error };
};


export default useFetch;
