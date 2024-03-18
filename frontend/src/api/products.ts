import client from "./client";

export const fetchProductsApi = ({serverUrl}: ApiRequestArgs) => client.get({url: '/articles', serverUrl});