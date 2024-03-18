import { useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  apiFunc: ApiRequestFunction | ApiRequestFunctionWithoutArgs,
  alertError?: boolean
}
   
const useApi = ({apiFunc, alertError = true}: Props) => {
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (args: ApiRequestArgs) => {
    setLoading(true);
    const response = await apiFunc({...args});
    setLoading(false);
    setError(!response.ok);
    setData(response.data);

    if(!response.ok && alertError)
      toast.error(response.message);
    
    return response;
  }

  return { data, error, loading, request };
}

export default useApi;