import { reactive } from "vue";

export const posts = reactive([
   { id: 1, title: 'Vue 3 là gì?', content: 'Vue 3 rất mạnh mẽ.' },
   { id: 2, title: 'Composition API', content: 'Dễ tách logic, dễ test.' },
   { id: 3, title: 'Vue Router', content: 'Quản lý điều hướng dễ dàng.' },
]);

export function usePosts() {
    const getPostById = (id) => posts.find(p => p.id === Number(id));

    const addPost = (post) => {
        post.id = Date.now();
        posts.push(post);
        alert('Bài viết đã được thêm thành công!');
    }

    const updatePost = (id, updated) => {
        const idx = posts.findIndex(p => p.id ===Number(id));
        if (idx !== -1) {
            posts[idx] = { ...posts[idx], ...updated }
        }
    }

    const deletePost = (id) => {
        const idx = posts.findIndex(p => p.id === Number(id));
        if (idx !== -1) posts.splice(idx, 1);
    }

    return {
        posts,
        getPostById,
        addPost,
        updatePost,
        deletePost
    };
}