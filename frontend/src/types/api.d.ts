type ApiResponse = {
  ok: boolean,
  data: object | null,
  message: string,
  response_code: number,
}

type ApiRequestArgs = {
  queryParams?: FetchProps['queryParams'],
  postData?: FetchProps['postData'],
  serverUrl?: boolean,
};

type FetchProps = ApiRequestArgs & {
  url: string,
};

type ApiRequestFunction = (args: ApiRequestArgs) => Promise<ApiResponse>;
type ApiRequestFunctionWithoutArgs = () => Promise<ApiResponse>;