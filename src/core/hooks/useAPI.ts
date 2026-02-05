import { useEffect, useState } from "react";
import { APIResponse } from "../models/api";

async function sendPOST<T, K> (body: T, url: string) : Promise<APIResponse<K>> {

    try {
    
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
    

        const response = await req.json();
        const apiUser = response as K;

        if(req.status !== 200) 
            throw new Error(`${response.error}`);

        const resolved : APIResponse<K> = { data: apiUser };
        return resolved;
    }
    catch(err) { 

        const error = err as Error;
        const resolved: APIResponse<K> = { data: null, error };
        return resolved;
    }
}

export function usePostAPI<T, K>(url: string) {

    const [body, setBody] = useState<T>();
    const [response, setResponse] = useState<APIResponse<K>>();

    useEffect(() => {

        if(url && body) {
            sendPOST<T, K>(body, url).then((data: APIResponse<K>) => {
                setResponse(data);
            });
        }

    }, [body, url]);


    return [response, setBody] as const;
}