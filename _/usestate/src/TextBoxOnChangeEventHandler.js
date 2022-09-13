import React,{Component} from "react";

class TextBoxOnChangeEventHandler extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            pw:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handlePWChange=this.handlePWChange.bind(this);
    }

    handleChange(e){
        this.setState({userName:e.target.value})
    }
    handlePWChange(e){
        this.setState({pw:e.target.value})
    }

    render(){
        return(
            <>
            <h1>TextBoxOnChangeEventHandler</h1>
            <input type='text' 
                placeholder="아이디" 
                onChange={this.handleChange}/>
            <input type='text'
                placeholder="암호"
                onChange={this.handlePWChange}/>
            <hr/>
            아이디 : {this.state.userName}
            , 암호 : {this.state.pw}
            </>
        );
    }
}

export default TextBoxOnChangeEventHandler;