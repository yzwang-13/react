import React, {useCallback, useState} from 'react';


const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig = {}, applyData = ()=> {}) => {
        const loadedTasks = [];
        try {
            setIsLoading(true);
            setError(null);
            let response = null;
            response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET' ,
                    body: requestConfig.body? JSON.stringify(requestConfig.body): null,
                    headers: requestConfig.headers? requestConfig.headers : {}
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            console.log(data)
            applyData(data);


        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);

    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
};

export default useHttp;
