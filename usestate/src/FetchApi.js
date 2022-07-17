import React,{Component} from "react";

class FetchApiPractice extends Component{
    constructor(){
        super();
        this.state={forecasts:[],loading:true};
    }

    componentDidMount(){
        this.setState({loading:true});
        fetch('/')
            .then(response=>response.json())
            .then(data=>{this.setState({forecasts:data,loading:false});});
    }

    static displayData(forecasts){
        console.log(forecasts);
        return(
            <h1>displayData</h1>
        );
    }

    render(){
        let contents=this.state.loading ? <p>loading...</p> : FetchApiPractice.displayData(this.state.forecasts);
        return(
            <>
            {contents}
            </>
        );
    }
}

export default FetchApiPractice;