const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');

AWS.config.update({
    "accessKeyId":"ASIAWNTJQVZTBR4IAEAP",
    "secretAccessKey":"Gnzd1CqoQFzWJu4bk0xAj21lq19n+paT0BL5jZNQ",
    "sessionToken":"FQoGZXIvYXdzEOz//////////wEaDE/NzmZvd+NYhRarOyL8BK6l020W0QkXyWEf5cDIrDDo2bHNAkwkS+il6cD2MJ/FbSuGR2YPt4603fBubnGayUhqUNsE2hdvFh9dPJj0ccfJC3yyvWezbWfVUW74SzehYtR+TN70/s4YF40UFWMIFSYI9F2ikKSmsJNsCSBRvGvoypECgpMrFH2u7tZiogWMipJw+1Hd149yos2hl5eFkB57LjMSpCw0JZMaCWFXYC1GDPAYk94XoF8vFzZ6WlTGPJ/4kjO+xu28zfY0iGqZnsD6APBw+9bOVWYJLstHL8jGqGAnkT++f1mYWIZJl8rePC2T9CQ0flvmH7RcVN66YAp7BwWAZBiXTKdjbNkhh5zvFOUApHyLvKokd0iENujC5IdbSzlCZotWBPTON+STcg9cuiFAKX9XukClt+9v21V99UTY/KF4eQQQ9z3DwovKJ6FcKs9wbZ7bVxjqn5PLu5kxvpULmK4/Wafr3lP/jGoBEvVNLoWFS5EteqTt/bAIZm2i7r0PkGMMfIcr3pJqMc6jXm539PypxF5H6R0yEam9netAa+pG0gEvL2LMT9OVxj5JiR9+RqTE9bP6hcYbgtJ+76mFCZXBP22VDZaBMVBkPTl6agAtaTirgnjWN/xBKZO5hMBXKcnlwFTmxl2eOi5vDF6WZXVnwtHxjoQog9o+Y3Xr+IaIC6TxB5QekWujDrEUWENuUaA7qlxGKzNb/BkfCPrkTo/aLhSoNqyLleiV+BYpkdeH0M/TVmcGIRZHRGebtqVUVVe9ye8aUkD2lJonVSpA5M1r5028q0A2kQZhjR/jWkPUchaNfQmvyYwiztO5vo9ctk7gm+hiGxkmSplxrUDPoF/oNAwJlSi3xeTqBQ==",
    "region":"us-east-1"
    })
var s3=new AWS.S3({apiVersion:'2006-03-01'});
var filepath="./data/file.txt";
var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:"Data1/"+path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})

var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:"Data1/"+path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})

var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:"Data1/"+path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})

var filepath="./data/file.txt";
var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:"Data1/"+path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})

var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:"Data1/"+path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})

var params={
    Bucket:"swaroopsample3",
    Body: fs.createReadStream(filepath),
    Key:path.basename(filepath),
}
s3.upload(params,function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log("Success")
    }
})