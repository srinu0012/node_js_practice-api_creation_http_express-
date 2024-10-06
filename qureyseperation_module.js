let queryobj=(n)=>{
    let obj={
    
    }
    for(i of n){
        let s=i.split("=")
        obj[s[0]]=s[1]
    }
    return obj
}

module.exports={
    queryobj
}







// let a=["id:1","u:6"]

// console.log(obj)


// let str=123
// console.log(str)