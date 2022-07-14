import React,{useState,useEffect} from "react";

function UseEffectHook(){
  const [agree,setAgree]=useState(false);

  useEffect(()=>{
    console.log('페이지 변경')
  });

  useEffect(()=>{
    console.log('페이지 로드')
  },[]);

  return(
    <>
    <h1>hi</h1>
    <input type='checkbox' value={agree}
          onChange={() => setAgree(agree => !agree)}/>
    {agree ? '동의함':'동의하지않음'}
    </>
  );
}

export default UseEffectHook;