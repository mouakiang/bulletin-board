import { signup, signInUser } from '../fetch-utils.js';

const signUpEl = document.querySelector('.sign-up');
const signInEl = document.querySelector('.sign-in');

signUpEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpEl);

    await signup(data.get('email'), data.get('password'));

    window.location.href = '../';
});

signInEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInEl);

    await signInUser(data.get('email'), data.get('password'));

    window.location.href = '../';
});
