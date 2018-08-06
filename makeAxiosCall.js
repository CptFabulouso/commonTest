'use strict';
import axios from 'axios';

const makeCall = async () => {
  const posts = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/42',
  );
  console.log(posts);
};

export default makeCall;
