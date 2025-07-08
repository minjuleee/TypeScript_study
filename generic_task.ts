// https://jsonplaceholder.typicode.com/posts
// 1. fetching 후 전체를 console.log로 출력
// 2. fetching 후 타입 모두 붙여서 타이틀만 출력하기

interface Post {
  userId : number;
  id : number;
  title : string;
  body : string;
}

const getPosts = async <Post>():Promise<Post[]> => {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await respone.json()
  return posts
}

const getTitles = (posts:Post[]):string[] => {
  return posts.map((post) => post.title)
}

getPosts<Post>()
  .then((posts) => posts.map((post) => post.title))
  .then(console.log)
  .catch(console.error)