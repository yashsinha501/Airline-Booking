const express = require('express')
const {ServerConfig, Logger} = require('./config')
const apiRoutes = require('./routes')


const app = express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully Started the Server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully Started the server", {});
});



