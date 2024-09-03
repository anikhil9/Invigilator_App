const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');

AWS.config.update({
    "accessKeyId":"ASIAWNTJQVZTFYUJE2XT",
    "secretAccessKey":"WzCIr/ul24y8Rnlq8FyCO/2xDUEsdTuTgVn2G2iX",
    "sessionToken":"FQoGZXIvYXdzEPf//////////wEaDGOOLw3RI02qU/g3ESKSA6hbRHY/GZD1Hs0xjUT5TJV0plUspIwvg6JUsfK/ZE63bx9d+fR/UBKt5Dcds9pCxdWXFLoAjDNlxpU0ST/788KplSvbm3rHt5BnznnGYq66FOFEidn2ethKmgLAASoPmrLkS03EOOHCjdjG2CdiEhI5Y2eXg2G8f79TsNXXOcovH3ET8kmjFZgS8Jlcu6c0/biOLDgplFfvjmN+phabQtmm9tvvlhtMNUw8GSBxtLfrNzle3sb9JJ2Psz+lJcJ1eU6WtnJ3QJlXfRQRok7hhha5er3DAihd9W+c+UbcCrcmqRm+R+XMEl+JKnDzJeQFJa69O9PRyKw9EhlPpCvC4nIeRmSm9jWbdVo4ONWCwRkKfYCwQkOqD4s3XgwepKXl6qh//Q9wV3sabSVdHFPC4XRzIkXmoCdO6Pi48/Gg1PnqILyhD6khIFI1C6Q53T6c+EME0ztBN+KWxbta4EpdFQJySeGAkAa5exMwNTRt2eY228D1kH1AlQ+0Z2ZbeZUMUmrqNkMopFjwtaxFbrR+BxuYmCiZ8a7qBQ==",
    "region":"us-east-1"
    })
var s3=new AWS.S3({apiVersion:'2006-03-01'});
// var params={
//     Bucket:"swaroopsample3",
//     Key:"Data1/file.txt",
// }
// s3.deleteObject(params,function(err,data)
// {
//     if(err)
//     {
//         console.log("Error",err)
//     }
//     if(data)
//     {
//         console.log("Success")
//     }
// })

// var params={
//     Bucket:"swaroopsample3",
//     Key:"file.txt",
// }
// s3.deleteObject(params,function(err,data)
// {
//     if(err)
//     {
//         console.log("Error",err)
//     }
//     if(data)
//     {
//         console.log("Success")
//     }
// })
// var params={
//     Bucket:"swaroopsample3",
    
// }
// s3.listObjects(params,function(err,data)
// {
//     if(err)
//     {
//         console.log("Error",err)
//     }
//     if(data)
//     {
//         console.log(data)
//     }
// })
s3.listBuckets(function(err,data)
{
    if(err)
    {
        console.log("Error",err)
    }
    if(data)
    {
        console.log(data)
    }
})

var params={
    Bucket:"swaroopsample3",
 }
s3.deleteBucket(params,function(err,data)
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

