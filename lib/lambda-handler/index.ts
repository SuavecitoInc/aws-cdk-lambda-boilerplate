type Event = {
  resource: string;
  path: string;
  httpMethod: "GET" | "POST" | "PUT" | "DELETE";
  headers: {
    [key: string]: string;
  };
  queryStringParameters: null;
  body: null;
};

export const handler = async (event: Event) => {
  // Extract specific properties from the event object
  const { resource, path, httpMethod, headers, queryStringParameters, body } =
    event;
  const response = {
    resource,
    path,
    httpMethod,
    headers,
    queryStringParameters,
    body,
  };
  return {
    body: JSON.stringify(response, null, 2),
    statusCode: 200,
  };
};
