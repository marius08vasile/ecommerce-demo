import client from "./client";

export const placeOrderApi = ({postData}: ApiRequestArgs) => client.post({url: '/orders', postData});