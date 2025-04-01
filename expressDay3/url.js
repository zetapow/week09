// URL Uniform Resource Locator
/* protocol: https://
/* domain or host: trademe.co.nz

URL may change - path added to end of domain (/marketplace/games/ps5)

URL Query
search?string=playstation

Path: /a/search
Query following ? - query parameters providing additional info to server string=playstation

URL Constructor - built in JS object to create and manipulate URLs in easy, structured way. Methods and properties to parse, modify and construct URLs

create URL object passing URL string as parameter.
const myURL = new URL('https://www.google.com/search?q=parameter')
const url = "https://www.trademe.co.nz/a/marketplace/books/search?search_string=book"

const myUrl = new URL(url)
- gives access to all aspects of url structure
-- href - full url
-- origin - return host and protocol of URL
-- hostname - host of URL withouth protocol
-- pathname - path of url
-- search - url params as string
-- searchParams - url params structured as object
*/
const exUrl =
   "https://www.trademe.co.nz/a/marketplace/computers/laptops/laptops/search?search_string=laptop&condition=new&shipping_method=pickup&price_min=20&price_max=30";

const url =
   "https://www.trademe.co.nz/a/marketplace/books/search?search_string=book";

const myUrl = new URL(url);
console.log(myUrl);
// console.log(myUrl.href);
console.log(myUrl.origin);
// console.log(myUrl.hostname);
console.log(myUrl.pathname);
// console.log(myUrl.search);
console.log(myUrl.searchParams);
// console.log(myUrl.searchParams.get("search_string"));

/* URL can contain parameters with useful info for browser
search parameter ? in url
assign value to variable name - search_string=books
chain parameters with (&) - search_string=books&max_price=100
no spaces in url - use (+) or %20

myURL.origin: https://www.trademe.co.nz
myURL.pathname: a/marketplace/computers/laptops/laptops/search
URLSearch Params {
search_string = laptop
condition = new
shipping_method = pickup
price_min => 20
price_max => 30
}

const url = "https://www.trademe.co.nz/a/marketplace/computers/laptops/laptops/search?search_string=laptop&condition=new&shipping_method=pickup&price_min=20&price_max=30"

client-side URL = different views or routes within frontend application, providing navigational structure

API url - access and interact with backend API endpoints. Allow front end to make requests to server and receive data or perform actions
*/

/* URL Query params
console.log(myUrl.searchParams)


*/
