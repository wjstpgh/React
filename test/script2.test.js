import getPeople from './script2'
//모듈 세팅 필요
it('calls swapi to get people',(done)=>{
  expect.assertions(1)
  getPeople.then(data=>{
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(10)
    done();
  })
})

it('getPeople returns count and results',()=>{
  const mockFetch=jest.fn()
  .mockReturnValue(Promise.resolve({
    json: ()=> Promise.resolve({
      count:87,
      results:[0,1,2,3,4,5]
    })
  }))

  expect.assertions(4);
  return getPeople(mockFetch).then(data=>{
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(10)
  })
})

