import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

//카드컴포넌트와 다르게 해당 컴포넌트의 속성은 없다면 map함수를 실행할 수 없으므로
//오류를 방지하기 위한 더미 데이터를 명시해주고 props을 제공해준다.
const filteredRobots = [{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
}]

it('renders without crashing', () => {
  expect(shallow(<CardList robots={filteredRobots} />)).toMatchSnapshot();
});