import react from "react";

function btn3(){
    console.log('3. 함수직접호출');
}

function OnclickEventHandler(){
    return(
        <>
            <h1>onclick</h1>
            <button onClick={function(){
                console.log('1. 무명메소드호출');
            }}>
                무명메소드호출
            </button>
            <button onClick={() => console.log('2.화살표함수호출')}>
                화살표함수사용호출
            </button>
            <button onClick={btn3}>
                함수직접호출
            </button>
        </>
        
    );
}

export default OnclickEventHandler;