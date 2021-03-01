// var modelJson = {
//     "information": [
//         {
//             "name": "厂房",
//             "type": "厂房",
//             "format": "obj",
//             "path":"厂房/file",
//             "position": null,
//             "scale": 1,
//             "rotate": null,
//             "child": []
//         },
//         {
//             "name": "开关",
//             "type": "开关",
//             "format": "obj",
//             "path":"开关/file",
//             "position": [-20,10,40],
//             "scale": 1,
//             "rotate":
//                 {
//                     "_x": 0,
//                     "_y":3.1415926535,
//                     "_z": 0
//                 },
//             "child": []
//         },
//         {
//             "name": "漏电保护器",
//             "type": "开关",
//             "format": "obj",
//             "path":"漏电保护器/file_close",
//             "position":  [-20,15,40],
//             "scale": 1,
//             "rotate": null,
//             "child": []
//         },
//         {
//             "name": "配电箱",
//             "type": "设施",
//             "format": "obj",
//             "path":"配电箱/file",
//             "position":  [-13.5,0,50],
//             "scale": 1,
//             "rotate": null,
//             "child": []
//         },
//         {
//             "name": "工业吸尘器",
//             "type": "设施",
//             "format": "obj",
//             "path":"工业吸尘器/file",
//             "position":  [-19,0,40],
//             "scale": 1,
//             "rotate": null,
//             "child": []
//         },
//         {
//             "name": "衣架",
//             "type": "货架",
//             "format": "obj",
//             "path":"衣架/file",
//             "position":  [0,0,1],
//             "scale": 1,
//             "rotate": null,
//             "child": [
//                 {
//                     "name": "绝缘鞋子/file",
//                     "type": "工具器",
//                     "path": "绝缘鞋子/file",
//                     "position": [
//                         [-1,1,0],[1,1,0],[-1,2.1,0],[1,2.1,0]
//                     ]
//                 },
//                 {
//                     "name": "绝缘毯",
//                     "type": "工具器",
//                     "path": "绝缘毯/file",
//                     "position": [
//                         [0,3,0],[0,3.25,0],[0,3.5,0],[0,3.75,0],
//                         [0,4.15,0],[0,4.4,0],[0,4.65,0],[0,4.9,0]
//                     ]
//                 },
//                 {
//                     "name": "绝缘手套",
//                     "type": "工具器",
//                     "path": "绝缘手套/file",
//                     "position": [
//                         [-1,5.35,0],[1,5.35,0],
//                         [-1,6.45,0],[1,6.45,0]
//                     ]
//                 },
//                 {
//                     "name": "安全帽",
//                     "type": "工具器",
//                     "path": "安全帽/file",
//                     "position": [
//                         [-1,7.6,0],[1,7.6,0],
//                         [-1,8.75,0],[1,8.75,0]
//                     ]
//                 },
//                 {
//                     "name": "绝缘衣",
//                     "type": "工具器",
//                     "path": "绝缘衣/file",
//                     "position": [
//                         [-5.5,7.25,1],
//                         [5.5,7.25,1]
//                     ]
//                 }
//             ]
//         },
//         {
//             "name": "货架4_1",
//             "type": "货架",
//             "path":"货架4/file",
//             "format": "obj",
//             "position":  [-18,0,10],
//             "scale": 1,
//             "rotate": {
//                 "_x": 0,
//                 "_y": 1.5707963267948966,
//                 "_z": 0
//             },
//             "child": [
//                 {
//                     "name": "五金工具",
//                     "type": "工具器",
//                     "path": "五金工具/file",
//                     "position": [
//                         [0,2.25,0],
//                         [0,5,0]
//                     ]
//                 },
//                 {
//                     "name": "万用表",
//                     "type": "工具器",
//                     "path": "万用表/file",
//                     "position": [
//                         [0,2.25,-5],
//                         [0,2.25,5],
//                         [0,5,-5],
//                         [0,5,5]
//                     ]
//                 },
//                 {
//                     "name": "带电接火三件套",
//                     "type": "工具器",
//                     "path": "带电接火三件套/file",
//                     "position": [
//                         [0,7.25,-2],
//                         [0,10,-2]
//                     ]
//                 }
//             ]
//         },
//         {
//             "name": "货架4_2",
//             "type": "货架",
//             "format": "obj",
//             "path":"货架4/file",
//             "position":  [18, 0, 15],
//             "scale": 1,
//             "rotate": {
//                 "_x": 0,
//                 "_y": -1.5707963267948966,
//                 "_z": 0
//             },
//             "child": [
//                 {
//                     "name": "绝缘遮蔽罩",
//                     "type": "工具器",
//                     "path": "绝缘遮蔽罩/file",
//                     "position": [
//                         [-0.5,2,0],[0,2,0],[0.5,2,0],
//                         [-0.5,4.75,0],[0,4.75,0],[0.5,4.75,0]
//                     ]
//                 },
//                 {
//                     "name": "电钻",
//                     "type": "工具器",
//                     "path": "电钻/file",
//                     "position": [
//                         [0,5.5,-5],[0,5.5,0],[0,5.5,5]
//                     ]
//                 },
//                 {
//                     "name": "金属探测仪",
//                     "type": "工具器",
//                     "path": "金属探测仪/file",
//                     "position": [
//                         [0,10,-1],[0,10,1],[0,10,3]
//                     ]
//                 },
//                 {
//                     "name": "电笔",
//                     "type": "工具器",
//                     "path": "电笔/file",
//                     "position": [
//                         [-0.5,10.1,-5],[0,10.1,-5],[0.5,10.1,-5]
//                     ]
//                 },
//                 {
//                     "name": "灯泡",
//                     "type": "工具器",
//                     "path": "灯泡/file",
//                     "position": [
//                         [0,10.1,5],[0,10.1,6],[0,10.1,4]
//                     ]
//                 }
//             ]
//         },
//         {
//             "name": "货架4_3",
//             "type": "货架",
//             "format": "obj",
//             "path":"货架4/file",
//             "position":  [18, 0, 30],
//             "scale": 1,
//             "rotate": {
//                 "_x": 0,
//                 "_y": -1.5707963267948966,
//                 "_z": 0
//             },
//             "child": [
//                 {
//                     "name": "电焊帽",
//                     "type": "工具器",
//                     "path": "电焊帽/file",
//                     "position": [
//                         [0,2.15,-4],[0,2.15,-2],[0,2.15,0],[0,2.15,2],[0,2.15,4]
//                     ]
//                 },
//                 {
//                     "name": "焊钳",
//                     "type": "工具器",
//                     "path": "焊钳/file",
//                     "position": [
//                         [0,4.65,-6],[0,4.65,-4],[0,4.65,-2],[0,4.65,0],[0,4.65,6],[0,4.65,4],[0,4.65,2]
//                     ]
//                 },
//                 {
//                     "name": "绝缘剥线器",
//                     "type": "工具器",
//                     "path": "绝缘剥线器/file",
//                     "position": [
//                         [0,7.5,0],[0,7.5,4],[0,7.5,-4]
//                     ]
//                 },
//                 {
//                     "name": "熔断器",
//                     "type": "工具器",
//                     "path": "熔断器/file",
//                     "position": [
//                         [0,10.25,-5],[0,10.25,-2.5],[0,10.25,0],[0,10.25,2.5],[0,10.25,5]
//                     ]
//                 }
//             ]
//         },
//         {
//             "name": "货架6",
//             "type": "货架",
//             "format": "obj",
//             "path":"货架6/file",
//             "position":  [17,0,2.5],
//             "scale": 1,
//             "rotate": null,
//             "child": [
//                 {
//                     "name": "绝缘跳线",
//                     "type": "工具器",
//                     "path": "绝缘跳线/file",
//                     "position": [
//                         [0,1,0],
//                         [0,3.5,0]
//                     ]
//                 },
//                 {
//                     "name": "电缆",
//                     "type": "工具器",
//                     "path": "电缆/file",
//                     "position": [
//                         [0,5.75,0],
//                         [0,7.5,0]
//                     ]
//                 }
//             ]
//         }
//     ]
// };
var modelJson = {};
var modelPlaced ={};
var tools_information = {};
var total = 0;
async function getData(i) {
    await axios({
        url: 'http://123.56.238.156:9200/tool_position/webgl/'+i,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        modelJson = res['data']['_source'];
    });
    await axios({
        url: 'http://123.56.238.156:9200/model_placed/webgl/'+i,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        modelPlaced = res['data']['_source'];

    });
    await axios({
        url: 'http://123.56.238.156:9200/tools_information/webgl/1',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        tools_information = res['data']['_source'];
    });
    await axios({
        url: 'http://123.56.238.156:9200/tool_position/webgl/_search',
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data:{
            "_source": false,
            "query" : {
                "match_all" : {}
            }
        }
    }).then(res => {
        app.sceneArray = []
        total= res['data']['hits']['total'] ;
        for(var i=0;i<total;i++){
            app.sceneArray.push('场景'+(i+1));
        }
    });
    initModel()
}
getData(1);
// // modelJson = {
// //     information: [
// //
// //     ]
// // }
// //http://123.56.238.156:9200/tool_position/webgl/1
//
//
// //http://123.56.238.156:9200/model_placed/webgl/1

///http://123.56.238.156:9200/tools_information/webgl/1
// var modelPlaced ={
//     "绝缘鞋子":{
//         "shelves":"衣架",
//         "light":[9,10],
//     },
//     "绝缘毯":{
//         "shelves":"衣架",
//         "light":[7,8],
//     },
//     "绝缘手套":{
//         "shelves":"衣架",
//         "light":[5,6]
//     },
//     "安全帽":{
//         "shelves":"衣架",
//         "light":[3,4]
//     },
//     "绝缘衣":{
//         "shelves":"衣架",
//         "light":[1,2]
//     },
//     "五金工具":{
//         "shelves":"货架4_1",
//         "light":[2,5]
//     },
//     "万用表":{
//         "shelves":"货架4_1",
//         "light":[1,3,4,6]
//     },
//     "带电接火三件套":{
//         "shelves":"货架4_1",
//         "light":[7,8,9,10,11,12]
//     },
//     "绝缘遮蔽罩":{
//         "shelves":"货架4_2",
//         "light":[1,2,3,4,5,6]
//     },
//     "电钻":{
//         "shelves":"货架4_2",
//         "light":[7,8,9]
//     },
//     "金属探测仪":{
//         "shelves":"货架4_2",
//         "light":[11]
//     },
//     "电笔":{
//         "shelves":"货架4_2",
//         "light":[10]
//     },
//     "灯泡":{
//         "shelves":"货架4_2",
//         "light":[12]
//     },
//     "电焊帽":{
//         "shelves":"货架4_3",
//         "light":[1,2,3]
//     },
//     "焊钳":{
//         "shelves":"货架4_3",
//         "light":[4,5,6]
//     },
//     "绝缘剥线器":{
//         "shelves":"货架4_3",
//         "light":[7,8,9]
//     },
//     "熔断器":{
//         "shelves":"货架4_3",
//         "light":[10,11,12]
//     },
//     "绝缘跳线":{
//         "shelves":"货架6",
//         "light":[1,2]
//     },
//     "电缆":{
//         "shelves":"货架6",
//         "light":[3,4]
//     },
// };