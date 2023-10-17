function fetchPostById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні поста');
            }
            return response.json();
        });
}

function fetchCommentsByPostId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні коментарів');
            }
            return response.json();
        });
}

function searchPost() {
    const postIdInput = document.getElementById('postIdInput');
    const postDetails = document.getElementById('postDetails');
    const commentsButton = document.getElementById('commentsButton');
    const postId = parseInt(postIdInput.value);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert('Введіть коректний ід поста (1-100)');
        return;
    }

    fetchPostById(postId)
        .then(post => {
            postDetails.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            commentsButton.style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
}

function fetchComments() {
    const postIdInput = document.getElementById('postIdInput');
    const commentsButton = document.getElementById('commentsButton');

    const postId = parseInt(postIdInput.value);

    fetchCommentsByPostId(postId)
        .then(comments => {
            const commentsList = comments.map(comment => `
            <div>
            <strong>${comment.name}</strong>
            <p>${comment.body}</p>
            </div>
            `).join('');

            const commentsContainer = document.createElement('div');

            commentsContainer.innerHTML = commentsList;
            
            document.body.appendChild(commentsContainer);

            commentsButton.style.display = 'none';
        })
        .catch(error => {
            alert(error.message);

        });
}
