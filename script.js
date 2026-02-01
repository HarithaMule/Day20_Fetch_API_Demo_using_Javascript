const output = document.getElementById("output");

const fetchData = (url)=>
    fetch(url).then(res=>res.json());
const loadTodos = () => {
    output.innerHTML = "<h2>Todos</h2>";
    fetchData("https://jsonplaceholder.typicode.com/todos")
    .then(todos => {
        todos.slice(0, 10).forEach(todo => {
            output.innerHTML += `
            <div class="card">
                <strong>${todo.title}</strong><br>
                Status: ${todo.completed ? "Completed" : "Pending"}
            </div>
            `;
        });
    });
};


const loadComments = () => {
    output.innerHTML = "<h2>Comments</h2>";
    fetchData("https://jsonplaceholder.typicode.com/comments")
    .then(comments => {
        comments.slice(0, 10).forEach(comment => {
            output.innerHTML += `
            <div class="card">
                <strong>${comment.name}</strong><br>
                ${comment.body}<br>
                <small>Email: ${comment.email}</small>
            </div>
            `;
        });
    });
};

const loadUsers = () => {
	  output.innerHTML = "<h2>Users</h2>";
	  fetchData("https://jsonplaceholder.typicode.com/users")
	    .then(users => {
	      users.forEach(user => {
	        output.innerHTML += `
	          <div class="card">
	            <strong>${user.name}</strong><br>
	            Username: ${user.username}<br>
	            Email: ${user.email}<br>
	            City: ${user.address.city}
	          </div>
	        `;
	      });
	    });
	};