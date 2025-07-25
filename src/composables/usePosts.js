import { ref } from "vue";
import axios from 'axios';

const API_URL = 'http://localhost:3000/posts'

export function usePosts() {
    const posts = ref([])
    const loading = ref(false) 

    const fetchPosts = async () => {
        loading.value = true;
        try {
            const res = await axios.get(API_URL);
            posts.value.push(...res.data);
            return res.data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        } finally {
            loading.value = false;
        }
    }

    const getPostById = async (id) => {
        const post = posts.value.find(p => p.id === Number(id));
        if (!post) {
            const res = await axios.get(`${API_URL}/${id}`);
            return res.data;
        }
        return post;
    };

    const addPost = async (post) => {
        const res = await axios.post(API_URL, post);
        posts.push(res.data);
    }

    const updatePost = async (id, updatedPost) => {
        await axios.put(`${API_URL}/${id}`, updatedPost);
        const index = posts.value.findIndex(p => p.id ===Number(id));
        if (index !== -1) posts[index] = updatePost;
    }

    const deletePost = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        posts.value = posts.value.filter(p => p.id !== id);
    }

    return {
        posts,
        loading,
        addPost,
        updatePost,
        deletePost,
        fetchPosts,
        getPostById
    };
}