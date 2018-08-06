import axios from 'axios';

export default (makeCall = async () => {
  const posts = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/42',
  );
  console.log(posts);
});
