fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
        let content = '';
        for (i = 0; i < 2; i++) {
            const title = `${posts[i].title}`;
            const body = `${posts[i].body}`;
            content += `<h3>${title}</h3><p>${body}</p>`;
        }
        document.getElementById("posts").innerHTML = content;
        console.log(posts);
    })




fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let users_info = '';
        for (i = 0; i < 3; i++) {
            const name = `${users[i].name}`;
            const username = `${users[i].username}`;
            const email = `${users[i].email}`;
            users_info += `<div class = "user-card"><h3>${name}</h3><h3>${username}</h3><h3>${email}</h3></div>`;
        }
        document.getElementById("users").innerHTML = users_info;
        console.log(users);
    })


fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {
        let comments_info = '';
        for (i = 0; i < 3; i++) {
            const name = `${comments[i].name}`;
            const email = `${comments[i].email}`;
            const body = `${comments[i].body}`
            comments_info += `<h3>${name}</h3><h3>${email}</h3><p>${body}</p>`;
        }
        document.getElementById("comments").innerHTML = comments_info;
        console.log(comments);
    })
