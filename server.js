const express=require('express');
const path=require("path")//需要绝对路径

const server =express();
server.use(express.static('./www')) //将www下边的文件变成同名资源
server.get('/',(req,res)=>{//资源是'/'请求和接收
    // res.send('ok')发送一个字符

    res.sendFile(
        path.resolve("./index.html")// 把相对路径变成绝对路径，发送同文件下的index.html文件
    )
});
server.listen(80);//监听80端口