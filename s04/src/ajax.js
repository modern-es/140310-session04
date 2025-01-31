//https://jsonplaceholder.typicode.com/posts
import Handlebars from "handlebars";

//Ajax
// xhr XMLHttpRequest

//fetch
//pollyfil

//sync
JSON.stringify('');

//promise
const f = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
f.then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

//async/await

async function loadData() {
}

const loadPosts = async () => {
    const postsTmpl = document.querySelector('#postsTmpl')
    const tmpl = Handlebars.compile(postsTmpl.innerHTML)

    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await resp.json();
    // const html = tmpl({ data: data });
    const html = tmpl({ data });
    const posts = document.querySelector('#posts');
    posts.innerHTML = html;
}

loadPosts();