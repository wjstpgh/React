import React, { Component } from 'react';
import { Sitelist } from './Shared/Sitelist/Sitelist';
import { Techlist } from './Shared/Techlist/Techlist';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>

        <div className='row'>
          <div className='col-md-6'>
            <h3><i className='fa fa-wrench'></i>기술 리스트</h3>
            <Techlist/>
          </div>
          <div className='col-md-6'>
            <h3><i className='fa fa-wrench'></i>사이트 리스트</h3>
            <Sitelist/>
          </div>
        </div>
      </div>
    );
  }
}
