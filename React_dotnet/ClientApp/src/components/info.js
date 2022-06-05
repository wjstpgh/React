import react,{Component} from "react";

export class Info extends Component{
    render(){
        const title='Information';
        const message='React test사이트입니다.';

        return(
            <>
                <h2>{title}</h2>
                <h3>{message}</h3>

                <p> 이 사이트는 React 테스트하는 중입니다.</p>
                <p> 테스트가 완료된 후에 현재 사이트가 완성됩니다.</p>
                <div className="row-mb-5">
                    <img src="http://placeimg.com/640/480/any"></img>
                </div>
            </>
        );
    }
}