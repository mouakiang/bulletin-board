import { checkAuth, createPost, getUser } from '../fetch-utils.js';

checkAuth();

const createNewForm = document.querySelector('.create-form');

createNewForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(createNewForm);

    const topic = formData.get('topic');
    const message = formData.get('message');
    const contact = formData.get('topic');

    const post = await createPost(topic, message, contact);

    window.location.href = '../';
});
