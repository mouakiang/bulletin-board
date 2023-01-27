/* Imports */

/* Get DOM Elements */
const postsContainerEl = document.querySelector('.posts-container');
const loginButtonEl = document.querySelector('.login-button');
const signUpButtonEl = document.querySelector('.signup-button');
/* State */
let posts = [];
/* Events */
loginButtonEl.addEventListener('click', () => {
    if (getUser()) signOut();

    window.location.href = './auth';
});

signUpButtonEl.addEventListener('click', () => {
    window.location.href = './create';
});

window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) {
        loginButtonEl.textContent = 'log out';
    }

    const newPosts = await getPosts();

    posts = newPosts;
    displayPosts();
});
/* Display Functions */
function displayPosts() {
    postsContainerEl.textContent = '';

    for (let post of posts) {
        const postsEl = document.createElement('div');
        const topicEl = document.createElement('h3');
        const messageEl = document.createElement('p');
        const contactEl = document.createElement('p');

        topicEl.textContent = post.topic;
        messageEl.textContent = post.message;
        contactEl.textContent = post.contact;

        postsEl.classList.add('post');

        postsEl.append(topicEl, messageEl, contactEl);

        postsContainerEl.append(postsEl);
    }
}
displayPosts();
// (don't forget to call any display functions you want to run on page load!)
