import HttpRequest from "./HttpRequest.js";

(new HttpRequest())
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response))
    .catch(error => console.log(error));

(new HttpRequest())
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

(new HttpRequest())
    .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "foo",
        body: "bar",
        userId: 1
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

(new HttpRequest())
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response))
    .catch(error => console.log(error));