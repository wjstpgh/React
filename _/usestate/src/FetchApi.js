import React,{Component} from "react";

class FetchApiPractice extends Component{
    constructor(){
        super();
        this.state={users:[],loading:true};
    }

    componentDidMount(){
        this.setState({loading:true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=>{this.setState({users:data,loading:false});});
    }

    static displayData(users){
        console.log(users);
        return(
            <table className="table table-bordered">
                <tbody> 
                    {users.map(user=>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render(){
        let contents=this.state.loading ? <p>loading...</p> : FetchApiPractice.displayData(this.state.users);
        return(
            <>
            <h1>FetchAPI</h1>
            {contents}
            </>
        );
    }
}

export default FetchApiPractice;