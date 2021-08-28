/**
 * title: Uptime monitoring application 
 * description: create a uptime monitoring application using raw node.j for monitor uptime uesr 
 * author: md sohidul islam
 * date: 28/08/2021
 */

// dependencies

const handle = {};

handle.notFoundRoute = (requestProperties, callback) => {

    // console.log(requestProperties);

    callback(404,{
        message:'Not found your targeted url'
    })
}

module.exports = handle;