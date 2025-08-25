import { defineStore } from "pinia";
import { usePosts } from "../composables/usePosts";


const { fetchPosts, getPostById, uploadImageToCloudinary, addPost } = usePosts();
export const usePostStore = defineStore('postStore', {
    state: () => ({
        post: [],
        totalPosts: 0,
        limit: 8,
        page: 1,
        search: '',
    }),

    actions: {
        async fetchPosts(page = 1, limit = 8) {
            this.page = page;
            this.limit = limit;
            const postsData = await fetchPosts(page, limit);
            this.post = postsData;
        },

        async getPostById(id) {
            return await getPostById(id);
        },

        async uploadImage(file) {
            return await uploadImageToCloudinary(file);
        },

        async addPost(postData) {
            return await addPost(postData);
        }
    }
})