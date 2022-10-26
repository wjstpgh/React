import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    console.log('클래스 생성자');
  }

  componentDidMount=()=>{
    console.log('com mount')
  }

  render() {
    console.log('cls render')
    return (
      <div>
        <h1>클래스 컴포넌트</h1>
      </div>
    )
  }
}

export default ClassComponent;