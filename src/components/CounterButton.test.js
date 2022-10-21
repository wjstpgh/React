import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

//클릭 이벤트 시뮬레이트로 이벤트 기능 테스트
it('correnctly increments the counter', () => {
  const wrapper = shallow(<CounterButton />)
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state())).toEqual({ count: 1 })
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state())).toEqual({ count: 3 })
});