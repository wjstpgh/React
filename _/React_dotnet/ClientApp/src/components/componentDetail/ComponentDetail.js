import React,{ Component } from "react";

export class ComponentDetail extends Component{
    render(){
        const phoneNum='11222';
        let address='Seoul';
        return(
            <ul>
                <li>tel: {phoneNum}</li>
                <li>add: {address}</li>
            </ul>
        );
    }
}