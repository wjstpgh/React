import react,{Component} from "react";

//투두리스트 인데이터
const todoItems=[
    {id:1,title:'공부',isDone:true},
    {id:2,title:'청소',isDone:true},
    {id:3,title:'빨래',isDone:true}
]

//투두 리스트 객체 컴포넌트
function TodoItem(props){
    //완료한 리스트 밑줄 스타일
    const isDoneStyle={
        textDecoration:'line-through'
    }
    return(
        <>
        <li>
            <input 
                type='checkbox' 
                checked={props.item.isDone}
                onChange={() => props.handelCheckedChange(props.item.id)}>
            </input>
            <span style={props.item.isDone ? isDoneStyle :null}>{props.item.title}</span>
        </li>
        </>
    );
}

class TodoListInMemory extends Component{
    constructor(){
        super();
        this.state={
            todos:todoItems
        };
        this.handelCheckedChange=this.handelCheckedChange.bind(this);
    }

    handelCheckedChange(id){
        this.setState(prev => {
            const modified=prev.todos.map(todo => {
                if(todo.id===id){
                    todo.isDone=!todo.isDone;
                }
                return todo;
            });
            return{
                todos:modified
            }
        });
    }

    render(){
        const todos=this.state.todos.map(
            (todo) => <TodoItem 
                            key={todo.id} 
                            item={todo} 
                            handelCheckedChange={this.handelCheckedChange}
                        />
        );

        return(
            <>
            <h3>인 메모리 TODO리스트</h3>
            <ul>
                {todos}
            </ul>
            </>
        );
    }
}

export default TodoListInMemory