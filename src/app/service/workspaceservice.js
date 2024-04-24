import headerToken from "../api/headerToken";

export const getallWorkSpace =async ()=>{
    const header =await headerToken();
    const res= await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',{
    headers:header,
    next: {tags: ['workspace']}
    });
    const data=await res.json();
    return data;
}

export const post = async (body)=>{
     const header =await headerToken();
    const res= await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',{
        method: 'POST',
        body: JSON.stringify(body),
        headers:header
    },);
    const data=await res.json();
    console.log("data",data);
    return data; 

}