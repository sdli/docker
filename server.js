"use strict";

const express = require('express');  
const app = express();

app.get('/', (req, res) => {  
    res.type('text/html');
    res.send("<h3>测试页面</h3>");
    res.end();
});

// note：这里用到一个环境变量
let port = process.env.HTTP_PORT || 8000;

app.listen(port, () => {  
    console.log('Listening on port %s', port);
});