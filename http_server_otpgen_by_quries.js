const http=require("http")
const opt=require("./otpgen_module.js")
const query_sep_obj=require("./qureyseperation_module.js")
const url=require("url")
let server=http.createServer((req,res)=>{
    try{
        let sep_obj=query_sep_obj.queryobj(url.parse(req.url).query?.split("&"))      
            res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Your OTP : ${opt.otpgen(sep_obj.count)}</h1>
</body>
</html>`)
            
    }catch(err){
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <h1 style="color:red;">Error occured : give count query parameter in the url </h1>
</body>
</html>`)
    }   
res.end()

})
server.listen(4001,()=>{
    console.log("server successfully established")
})
