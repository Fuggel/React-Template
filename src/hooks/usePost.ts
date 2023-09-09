import { useState } from "react";
import axios from "axios";


const usePost = <T>() => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const postData = (url: string, postData: T[]) => {
        setIsLoading(true);

        axios.post(url, postData)
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
    };

    return { data, postData, isLoading, error };
};


export default usePost;