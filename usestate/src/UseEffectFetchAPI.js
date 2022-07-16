import React,{useState,useEffect} from "react";

function FetchApi(){

    const [forecast,setForecast]=useState(null);
    const alarm=', <= Home경로에 전달받은 데이터를 json으로 읽어오는 곳'

    useEffect(()=>{
        fetch('/').then(response=>response.json())
            .then(setForecast)
            .catch(console.error);
    }, []);

    return(
        <>
        <h1>FetchApi</h1>
        {JSON.stringify(forecast)}
        {alarm}
        </>
    )
}

export default FetchApi;