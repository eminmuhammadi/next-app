import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.API_URL}`,
    timeout: 30 * 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    responseType: 'json'
});

axios.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
        const { data, status, config } = error.response!;
        switch (status) {
            case 400:
                console.error(data);
                break;

            case 401:
                console.error(`[Error]: Unauthorized, [Debug]: ${JSON.stringify(config)}`);
                break;

            case 404:
                console.error(`[Error]: Not found, [Debug]: ${JSON.stringify(config)}`);
                break;

            case 500:
                console.error(`[Error]: Internal server error, [Debug]: ${JSON.stringify(config)}`);
                break;
        }
        return Promise.reject(error);
    }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const fetcher = {
    // Get 
    get: <T>(url: string) => 
        axiosInstance.get<T>(url).then(responseBody),

    // Post
    post: <T>(url: string, body: {}) =>
        axiosInstance.post<T>(url, body).then(responseBody),

    // Put
    put: <T>(url: string, body: {}) =>
        axiosInstance.put<T>(url, body).then(responseBody),

    // Delete
    delete: <T>(url: string) => 
        axiosInstance.delete<T>(url).then(responseBody),
};

export default fetcher;