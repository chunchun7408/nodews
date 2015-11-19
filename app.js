var app = require('express');
var factory = require('./factory');


var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        var dataArr = JSON.parse(str);
        if ( dataArr ) {
            factory.factory(conn, dataArr);
        }
        console.log("收到的信息为:"+str)
        conn.sendText(str)
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(3000)