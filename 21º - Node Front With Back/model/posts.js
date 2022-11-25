module.exports = {
    posts: [
        {
            id: "scacavev",
            title: "Meu 1º Post",
            description: "Descrição Teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({id:generationID(), title, description});
    }
}

function generationID() {
    return Math.random().toString(36).substring(2, 9);
}