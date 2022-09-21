fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{
  const firstUser=users[0];
  console.log(firstUser);
  return fetch(
    'https://jsonplaceholder.typicode.com/posts?userId='+firstUser.id
  );
})
.then(response=>response.json())
.then(posts=>console.log(posts))
.catch(error=>console.log(error));//모든 에러를 다 잡음

const asyncFunc=async()=>{
  try{
    const userResponse=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await userResponse.json();
    const firstUser=users[0];
    console.log(firstUser);
    const postsResponse=await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId='+firstUser.id
    )
    const posts=await postsResponse.json();
    console.log(posts);
  }
  catch(err){
    console.log('error')//에러발생시 중간에 멈춤
  }
}
asyncFunc();