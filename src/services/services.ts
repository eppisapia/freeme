import axios from 'axios';
/**
 * Basic config of the Http Payload
 * https://api7.cloudframework.io/freeme/mobile
 */

export const newsApi = axios.create({
    baseURL: "https://api7.cloudframework.io/freeme/mobile",
    timeout: 60000
});

/**
 * Post service to Login
 * @param path endpoind path
 */
export const loginService = (path: string) => {
    return newsApi.post(path, {}, {
        headers: {
            'X-WEB-KEY': 'Production',
        }
    });
}

/**
 * General Get service
 * @param path endpoint Path
 * @param webkey X-WEB-KEY header value
 * @param token X-DSTOKEN header value
 */
export const getService = (path: string, webkey: string, token: string) => {
    return newsApi.get(path, {
        headers: {
            'X-WEB-KEY': webkey,
            'X-DS-TOKEN': token
        }
    });
}

