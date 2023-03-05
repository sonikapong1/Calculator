function btnvalue(val){
    document.getElementById("data").value+=val
}
function calc(){
    let no=document.getElementById("data").value
    let res=eval(no)
    document.getElementById("data").value=res
    
}
function dataclr(){
    document.getElementById("data").value=null
}