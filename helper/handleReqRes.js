/**
 * title handle request and response for server application
 * description: uptime monitoring application for user monitor
 * author : md sohidul islam
 * date : 28/08/2021
 */

// dependencies
const { time } = require('console');
const url = require('url');
const { notFoundRoute } = require('../handelers/RouteHandelers/notFoundRoute'); 
const routes = require('../routes');


const handleReqRes = (req, res) => {

    const method = req.method.toLowerCase();
    const headers = req.headers;
    const parsedUrl  = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath  = path.replace(/^\/+|\/+$/g,''); 
    const query = parsedUrl.query;

    console.log(trimmedPath);


    const requestProperties = {
        method, headers, parsedUrl, path,trimmedPath, query
    }
 
    const chosenHandeler = routes[trimmedPath] ?  routes[trimmedPath] : notFoundRoute;
    
 

    chosenHandeler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number'? statusCode : 500;
        payload = typeof payload === 'object'? payload : {};

        res.writeHead(statusCode, {'Content-type':'application/json'});
        res.end(JSON.stringify(payload))
    })


    // res.writeHead(200,{'Content-Type':'application/json'});
    // res.end(JSON.stringify(requestProperties))

}


module.exports =handleReqRes;