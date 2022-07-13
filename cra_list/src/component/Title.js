import React from "react";

function Title(){
    const date=new Date();
    const subject=(date.getSeconds()%2===0) ?'React':'jQuery';
    const title=`${subject} 리스트`;
    const titleStyle={
        color:'#C0FFEE',
        textDecoderation:'underline'
    };
    return(
        <header className="guide-title">
            <h1 style={titleStyle}>{title}</h1>
        </header>
    );
}

export default Title;