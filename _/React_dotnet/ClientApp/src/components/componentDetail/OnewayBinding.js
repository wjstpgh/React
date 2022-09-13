import react,{Component} from "react";

export class OnewayBinding extends Component{

    constructor(props){
        super(props);
        this.state={
            msg:'메세지입니다.'
        };
        this.handleChange=this.handleChange.bind(this);
    }    

    handleChange(e){
        this.setState({
            msg:e.target.value
        });
    }

    render(){
        return(
            <>
            <h1>양방향 바인딩 구현</h1>
            <div>{this.state.msg}</div>
            <hr/>
            <input  type='text' 
                    value={this.state.msg} 
                    onChange={this.handleChange}>
                        
            </input>
            </>
        );
    }
}