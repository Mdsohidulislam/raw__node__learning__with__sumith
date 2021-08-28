/**
 * title: Uptime monitoring application 
 * description: create a uptime monitoring application using raw node.j for monitor uptime uesr 
 * author: md sohidul islam
 * date: 28/08/2021
 */

// dependencies

//  handle ojbect - module  scaffolding

const handle = {};

handle.sampleRoute = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'your url currently working'
    })
}


module.exports = handle;