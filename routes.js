/**
 * title: Uptime monitoring application 
 * description: create a uptime monitoring application using raw node.j for monitor uptime uesr 
 * author: md sohidul islam
 * date: 28/08/2021
 */

const { sampleRoute } = require("./handelers/RouteHandelers/SampleRoute");

// dependencies


const routes = {
    sample: sampleRoute
}


module.exports  =  routes;