const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serila
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);

// Host Name (does nt get pot)
console.log(myUrl.hostname);

//Path Name
console.log(myUrl.pathname);

//Seralized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

//Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop throug params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value} `);
});
