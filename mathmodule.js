let add=(a,b,...c)=>{
        tot=a+b
        for(i of c){
            tot+=i
        }
        return tot
}
let div=(a,b,...c)=>{
    tot=a/b
        for(i of c){
            tot/=i
        }
        return tot
}
let mul=(a,b,...c)=>{
    tot=a*b
        for(i of c){
            tot*=i
        }
        return tot
}
let sub=(a,b,...c)=>{
    tot=a-b
        for(i of c){
            tot-=i
        }
        return tot
}

module.exports={
    add,div,mul,sub
}


