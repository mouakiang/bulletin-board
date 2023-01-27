const SUPABASE_URL = 'https://iudwxayjxecgwjeagrxm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd4YXlqeGVjZ3dqZWFncnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MjI4MzIsImV4cCI6MTk5MDA5ODgzMn0.M4jIDI8h0jzNN-c5n-GUBEaYhy1WmI9qxDja3jyUfTc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signup(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });

    // if (response.error) return console.error(response.error);

    return response.data;
}

export async function signIn(email, password) {
    const signIn = await client.auth.signInWithPassword({
        email: email,
        password: password,
    });

    return signIn.data;
}

export async function newPosts(topic, message, contact) {
    const { data, error } = await client.from('posts').insert([
        {
            topic: topic,
            message: message,
            contact: contact,
        },
    ]);

    return data;
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth');
}

export async function signOut() {
    const response = await client.auth.signOut();

    return response.error;
}

export async function getPosts() {
    const { data } = await client.from('posts').select('*');

    return data;
}
