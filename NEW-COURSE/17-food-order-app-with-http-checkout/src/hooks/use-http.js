import {useCallback, useState} from "react";


const useHttp = (applyData = () => {}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (requestConfig) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, requestConfig.config);
            if (!response.ok) {
                throw new Error('Ahh something went wrong!')
            }

            const data = await response.json();
            applyData(data)
        } catch (e) {
            console.log(e.message)
            setError(e.message)
        }
        // console.log(mealsArray)
        setIsLoading(false);

        // console.log(recipes);
    }, []);

    return{
        isLoading,
        hasError: error,
        sendRequest
    }
};

export default useHttp;
