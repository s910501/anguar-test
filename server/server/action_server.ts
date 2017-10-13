import * as express from 'express';
import * as path from 'path';
import {Server} from 'ws';

const app = express();

app.use('/',express.static(path.join(__dirname, '..', 'client')));

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ){}
}

const products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '1这是商品的一个描述，正在学习Angular往上哎呀呀中', ['A', 'B']),
    new Product(2, '第二个商品', 2.99, 2.5, '2这是商品的二个描述，正在学习Angular往上哎呀呀中', ['A', 'C']),
    new Product(3, '第三个商品', 3.99, 1.5, '3这是商品的三个描述，正在学习Angular往上哎呀呀中', ['A']),
    new Product(4, '第四个商品', 4.99, 3.5, '4这是商品的四个描述，正在学习Angular往上哎呀呀中', ['B']),
    new Product(5, '第五个商品', 5.99, 4.5, '5这是商品的五个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'C']),
    new Product(5, '第六个商品', 7.99, 2.5, '6这是商品的六个描述，正在学习Angular往上哎呀呀中', ['A', 'B', 'D']),
];

export class Comment {
    constructor(public id: number,
                public productId: number,
                public timestamp: string,
                public user: string,
                public rating: number,
                public content: string) {
    }
}
const comments: Comment[] = [
    new Comment(1, 1, '2017-01-01 22:22:22', 'shenzm1', 3, '东西不错1'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'shenzm2', 4, '东西不错2'),
    new Comment(3, 3, '2017-03-03 22:22:22', 'shenzm3', 5, '东西不错3'),
    new Comment(4, 2, '2017-04-05 22:22:22', 'shenzm4', 2, '东西不错4')
]




// app.get('/',(req,res) => {
//     res.send("Hello Express")
// });

app.get('/api/product/:id',(req,res) => {
    console.log();
    res.json(products.find((product: Product) => product.id == req.params.id));
});

app.get('/api/products',(req,res) => {
    let result = products;
    let params = req.query;
    console.log(params);
    if (params.title) {
        console.log('1');
        result = result.filter((p) => p.title.indexOf(params.title) !== -1)
    }
    console.log(params.price)
    if (params.price != 'null' && result.length >0) {
        console.log('2');
        result = result.filter((p) => p.price <= parseInt(params.price));
    }
    if (params.category != '-1' && result.length >0) {
        console.log('3');
        result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
    }
    res.json(result);
});

app.get('/api/product/:id/comments',(req,res) => {
    res.json(comments.filter((comment: Comment) => comment.productId == req.params.id ));
});

const server = app.listen(8080,"localhost",() => {
    console.log("server start!!!!")
})

const wsServer = new Server({port:8085});

const subscription = new Map<any, number[]>();

wsServer.on('connection',websocket => {
    //websocket.send('这个消息是服务器推送的');
    websocket.on("message",message => {
        let messageObj = JSON.parse(message);
        let productIds = subscription.get(websocket) || [];
        subscription.set(websocket,[...productIds, messageObj.productId]);
        console.log("接收到消息：" + message )
    })
});

// client productid
const currentBids = new Map<number, number>();

setInterval(() => {
    products.forEach(p => {
       let currentBid = currentBids.get(p.id) || p.price;
       let newBid = currentBid + Math.random() * 5;
       currentBids.set(p.id, newBid);
    });
    subscription.forEach((productIds: number[],ws) => {
        if(ws.readyState ===1) {
            let newBids = productIds.map(pid => ({
                productId: pid,
                bid: currentBids.get(pid)
            }));
            ws.send(JSON.stringify(newBids));
        }else {
            subscription.delete(ws);
            console.log(ws);
            console.log('delete ws');
        }

    });
},2000)

// setInterval(()=>{
//     if(wsServer.clients){
//         wsServer.clients.forEach(client => {
//             client.send('这是定时推送');
//         })
//     }
// },2000);