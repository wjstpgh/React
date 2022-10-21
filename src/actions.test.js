import * as actions from './actions'
import * as types from './constants'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

export const mockStore = configureMockStore([thunkMiddleware]);
//검색값 캐치 액션이 test페이로드를 제대로 전달하는 지 테스트
describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})
//더미 스토어에 로봇요청 액션을 디스패치할때 액션의 첫번째 값인 타입이 액션의 맞는 타입으로 불려오는지 테스트
describe("Fetch robots action PENDING", () => {
  it("should creat a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0]).toEqual({ type: "REQUEST_ROBOTS_PENDING" });
  });
});