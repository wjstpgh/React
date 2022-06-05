import React,{ Component } from "react";
import { ComponentDetail } from "./componentDetail/ComponentDetail";

export class Contact extends Component{
    render(){
        return(
            <div>
                <h1>연락처</h1>
                <p>
                    연락처 페이지입니다.
                </p>
                <ComponentDetail></ComponentDetail>
            </div>
        );
    }
}