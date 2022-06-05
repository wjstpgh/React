import react,{Component} from "react";

export class State extends Component {
    constructor(){
        super();
        this.state={
            title:'React',
            message:'state개체로 상태관리'
        };
    }
    render(){
        return(
            <h1>{this.state.title} - {this.state.message}</h1>
        );
    }
}
