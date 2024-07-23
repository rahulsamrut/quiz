export const getResult=(obj)=>{
    return JSON.parse(localStorage.getItem("result") || "[]");     
       
    
    }