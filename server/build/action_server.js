"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 1.99, 3.5, '1这是商品的一个描述，正在学习Angular往上哎呀呀中', ['A', 'B']),
    new Product(2, '第二个商品', 2.99, 2.5, '2这是商品的二个描述，正在学习Angular往上哎呀呀中', ['A', 'C']),
    new Product(3, '第三个商品', 3.99, 1.5, '3这是商品的三个描述，正在学习Angular往上哎呀呀中', ['A']),
    new Product(4, '第四个商品', 4.99, 3.5, '4这是商品的四个描述，正在学习Angular往上哎呀呀中', ['B']),
    new Product(5, '第五个商品', 5.99, 4.5, '5这是商品的五个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'C']),
    new Product(5, '第六个商品', 7.99, 2.5, '6这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']),
];
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var comments = [
    new Comment(1, 1, '2017-01-01 22:22:22', 'shenzm1', 3, '东西不错1'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'shenzm2', 4, '东西不错2'),
    new Comment(3, 3, '2017-03-03 22:22:22', 'shenzm3', 5, '东西不错3'),
    new Comment(4, 2, '2017-04-05 22:22:22', 'shenzm4', 2, '东西不错4')
];
// app.get('/',(req,res) => {
//     res.send("Hello Express")
// });
app.get('/api/product/:id', function (req, res) {
    console.log();
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    console.log(params);
    if (params.title) {
        console.log('1');
        result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
    }
    console.log(params.price);
    if (params.price != 'null' && result.length > 0) {
        console.log('2');
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
    }
    if (params.category != '-1' && result.length > 0) {
        console.log('3');
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
    }
    res.json(result);
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8080, "localhost", function () {
    console.log("server start!!!!");
});
var wsServer = new ws_1.Server({ port: 8085 });
var subscription = new Map();
wsServer.on('connection', function (websocket) {
    //websocket.send('这个消息是服务器推送的');
    websocket.on("message", function (message) {
        var messageObj = JSON.parse(message);
        var productIds = subscription.get(websocket) || [];
        subscription.set(websocket, productIds.concat([messageObj.productId]));
        console.log("接收到消息：" + message);
    });
});
// client productid
var currentBids = new Map();
setInterval(function () {
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price;
        var newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });
    subscription.forEach(function (productIds, ws) {
        if (ws.readyState === 1) {
            var newBids = productIds.map(function (pid) { return ({
                productId: pid,
                bid: currentBids.get(pid)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscription.delete(ws);
            console.log(ws);
            console.log('delete ws');
        }
    });
}, 2000);
// setInterval(()=>{
//     if(wsServer.clients){
//         wsServer.clients.forEach(client => {
//             client.send('这是定时推送');
//         })
//     }
// },2000); 
