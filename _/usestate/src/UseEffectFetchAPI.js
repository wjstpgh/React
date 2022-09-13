import React,{useState,useEffect} from "react";

function FetchApi(){

    const [user,setUser]=useState(null);
    const alarm=', <= Home경로에 전달받은 데이터를 json으로 읽어오는 곳'

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(setUser)
            .catch(console.error);
    }, []);

    return(
        <>
        <h1>FetchApi</h1>
        {JSON.stringify(user)}
        <hr></hr>
        {alarm}
        </>
    )
}

export default FetchApi;