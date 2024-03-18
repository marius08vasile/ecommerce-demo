type FetchMethods = {
  method: "GET" | "POST" | "PUT" | "DELETE",
}

const createApiResponse = (): ApiResponse => {
  return {
    ok: true,
    data: null,
    message: '',
    response_code: 200
  };
}

const fetchRequest = async ({url, method, postData = {}, queryParams = "", serverUrl = false}: FetchProps & FetchMethods): Promise<ApiResponse> => {
  const serviceResponse = createApiResponse();
  try {
    const apiUrl = serverUrl ? process.env.SERVER_VAR : process.env.NEXT_PUBLIC_CLIENT_VAR;
    const response = await fetch(apiUrl + url + queryParams, {
      method,
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: method === 'POST' ? JSON.stringify(postData) : undefined,
      cache: 'no-store'
    });

    if(!response.ok) throw new Error(await response.text());

    const decodedData = await response.json();
    serviceResponse.data = decodedData;
    return serviceResponse;
  } catch (error) {
    serviceResponse.ok = false;
    serviceResponse.response_code = 500;

    if(error instanceof Error)
      serviceResponse.message =  error.message === 'Failed to fetch' ? "There was an error. Please try again later" : error.message;

    return serviceResponse;
  }
}

export const getRequest = async (props: FetchProps): Promise<ApiResponse> => {
  return fetchRequest({
    method: "GET",
    ...props
  });
}

export const postRequest = async (props: FetchProps): Promise<ApiResponse> => {
  return fetchRequest({
    method: "POST",
    ...props
  });
}

export const putRequest = async (props: FetchProps): Promise<ApiResponse> => {
  return fetchRequest({
    method: "PUT",
    ...props
  });
}

export const deleteRequest = async (props: FetchProps): Promise<ApiResponse> => {
  return fetchRequest({
    method: "DELETE",
    ...props
  });
}

const requests = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
}

export default requests;