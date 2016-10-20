# Apigee-4MV4D-ConcurrentRateLimitPolicy

This is an example proxy that illustrates how to use Apigee Edge to throttle number of concurrent connection to your API traget server using ConcurrentRateLimitPolicy.

## Example

Consider a scenario where your backend server supports only X number of concurrent API calls. What if, there are more number of concurrent connections, say X + Y ? Most probably, Latencies will increase or server will die.

Let's say you would like to gracefully decline requests & send back 503 error response to the client. It's very simple to implement same in Apigee Edge by creating a proxy & using ConcurrentRateLimitPolicy. Apigee Intelligent API Platform also allows dynamic inbound connections throttling based on API flow variables to the target endpoint using the same policy.

Above example proxy demonstrates how to restrict 2 concurrent connections to the target endpoint. To demonstrate same, We are using Node.JS target server with a delay of 20 seconds.

For example,

API Request 1 - Time 0th second - Allowed - Waiting for response

API Request 2 - Time 1st second - Allowed - Waiting for response

Any further requests till request 1 / 2 is completely processed & response sent back the client will be restricted and given 503 response back the client.

## How to use above bundle ?

1. Download zip file from /bundle/apiproxy.zip
2. Create a new proxy in Apigee Edge
3. Choose 'Proxy Bundle' option in Build a proxy screen
4. Upload apiproxy.zip
5. Once proxy is created, Deploy same to environment.
6. Make API calls to see policy in action.

## 4MV4D Video Link

[Apigee-4MV4D-ConcurrentRateLimit Polciy-Demo](https://www.youtube.com/watch?v=lv9XQklW03E)
