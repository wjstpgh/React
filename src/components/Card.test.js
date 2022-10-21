import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});

//shallow는 컴포넌트가 렌더링 되는 것에 대해 테스트
console.log(shallow(<Card />))

it('expect to render card comp', () => {
  expect(shallow(<Card />).length).toEqual(1)
})