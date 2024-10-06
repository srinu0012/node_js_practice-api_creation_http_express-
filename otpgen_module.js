let otpgen=(size)=>{
    otp=""
    for(i=0;i<size;i++){
        otp+=Math.floor(Math.random()*10)

    }
    return otp
}
module.exports={
    otpgen
}