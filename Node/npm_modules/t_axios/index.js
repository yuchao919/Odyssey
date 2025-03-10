/**
 * 功能清单
 *    - Make XMLHttpRequests from the browser
 *    - Make http requests from node.js
 *    - Supports the Promise API
 *    - Intercept request and response
 *    - Transform request and response data
 *    - Cancel requests
 *    - Timeouts
 *    - Query parameters serialization with support for nested entries
 *    - Automatic request body serialization to:
 *          JSON (application/json)
 *          Multipart / FormData (multipart/form-data)
 *          URL encoded form (application/x-www-form-urlencoded)
 *    - Posting HTML forms as JSON
 *    - Automatic JSON data handling in response
 *    - Progress capturing for browsers and node.js with extra info (speed rate, remaining time)
 *    - Setting bandwidth limits for node.js
 *    - Compatible with spec-compliant FormData and Blob (including node.js)
 *    - Client side support for protecting against XSRF
 * 
 * Request method aliases
 * For convenience aliases have been provided for all supported request methods.
 *    - axios.request(config)
 *    - axios.get(url[, config])
 *    - axios.delete(url[, config])
 *    - axios.head(url[, config])
 *    - axios.options(url[, config])
 *    - axios.post(url[, data[, config]])
 *    - axios.put(url[, data[, config]])
 *    - axios.patch(url[, data[, config]])
 *    - axios.postForm(url[, data[, config]])
 *    - axios.putForm(url[, data[, config]])
 *    - axios.patchForm(url[, data[, config]])
 * 
 * axios 可以用来封装请求的参数，将相类似的请求封装成一个实例，或者设置超时机制
 * 它本身也是一个实例
 */


