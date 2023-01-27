import { signup } from '../fetch-utils.js';

const signUpEl = document.querySelector('.sign-up');

signUpEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpEl);

    await signup(data.get('email'), data.get('password'));

    window.location.href = '../';
});
