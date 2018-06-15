var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");
 

//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// var responseLogPath = path.resolve(__dirname, "../logs/response/response");

/*
module.exports = {
    "appenders":
    [
        //错误日志
        {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": errorPath                     //自定义属性，错误日志的根目录
        },
        //响应日志
        {
            "category":"resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responsePath  
        }
    ],
    "levels":                                   //设置logger名称对应的的日志等级
    {
        "errorLogger":"ERROR",
        "resLogger":"ALL"
    },
    "baseLogPath": baseLogPath                  //logs根目录
}

*/

module.exports = {
    appenders: {
        out: { type: 'console' }, 
        task: { type: 'dateFile', filename: 'logs/task',"pattern":"-dd.log", alwaysIncludePattern:true }, 
        result: { type: 'dateFile', filename: 'logs/result',"pattern":"-dd.log", alwaysIncludePattern:true}, 
        error: { type: 'dateFile', filename: 'logs/error', "pattern":"-dd.log",alwaysIncludePattern:true}, 
        default: { type: 'dateFile', filename: 'logs/default', "pattern":"-dd.log",alwaysIncludePattern:true}, 
        rate: { type: 'dateFile', filename: 'logs/rate', "pattern":"-dd.log",alwaysIncludePattern:true} 
    },
    categories: {
        default: { appenders: ['out','default'], level: 'info' },
        task: { appenders: ['task'], level: 'info'},
        result: { appenders: ['result'], level: 'info' },
        error: { appenders: ['error'], level: 'error' },
        rate: { appenders: ['rate'], level: 'info' }
    }
}