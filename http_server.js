let http=require("http")
http.createServer((req,res)=>{  
       if(req.method=="POST"){
        res.write("post ocuurs")
       }else if(req.method=="GET"){
        res.write("GET ocuurs")
       }else if(req.method=="PUT"){
        res.write("PUT ocuurs")
       }else if(req.method=="DELETE"){
        res.write("DELETE ocuurs")
       }
   
       res.end()
}).listen(4000,()=>{
  console.log("starting server at 4000")
})
