/**
 * title: Uptime monitoring application 
 * description: create a uptime monitoring application using raw node.j for monitor uptime uesr 
 * author: md sohidul islam
 * date: 28/08/2021
 */

// dependencies
const http = require('http');
const handleReqRes = require('./helper/handleReqRes');


// app object  - module scafollding

const app = {};
  
app.config = {
    port : 30009
}

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, ()=>{
        console.log(`Server is running on port http://localhost:${app.config.port}`);
    })
}

app.handleReqRes  =  handleReqRes;
app.createServer();