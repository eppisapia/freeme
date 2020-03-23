import axios from 'axios';
/**
 * Basic config of the Http Payload
 * b9c715d7b95444f9bf4bfa403d1e890e
 * https://api7.cloudframework.io/freeme/mobile
 */

interface postBody { }

export const newsApi = axios.create({
    baseURL: "https://api7.cloudframework.io/freeme/mobile",
    timeout: 60000
});


export const loginService = (path: string) => {
    return newsApi.post(path, {}, {
        headers: {
            'X-WEB-KEY': 'Production',
        }
    });
}

export const getService = (path: string, webkey: string, token: string) => {
    return newsApi.get(path, {
        headers: {
            'X-WEB-KEY': webkey,
            'X-DS-TOKEN': token
        }
    });
}

