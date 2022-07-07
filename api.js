// GET
import axios from 'axios';
export function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((err) => console.log(err)) 
}