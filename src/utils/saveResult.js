export const saveResult=(obj)=>{
    console.log(obj)
const result=JSON.parse(localStorage.getItem("result") || "[]");
   
    obj={...obj,sessionId:new Date().toUTCString()}
    result.push(obj);
    localStorage.setItem('result',JSON.stringify(result))  

}