import { ref } from "vue";
import axios from "axios";

const API_URL = "http://localhost:3000/posts";

export function usePosts() {
  const posts = ref([]);
  const loading = ref(false);
  const totalPosts = ref(0);

  const fetchPosts = async (page = 1, limit = 8) => {
    loading.value = true;
    try {
      const res = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`, {
        headers: {
          Accept: 'application/json'
        }
      })
      console.log('Header keys:', res.headers['x-total-count']);
      posts.value.push(...res.data);
      totalPosts.value = parseInt(res.headers['x-total-count']) || 0
      console.log("Total posts:", parseInt(res.headers['x-total-count']));
      return res.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  const getPostById = async (id) => {
    const post = posts.value.find((p) => p.id === Number(id));
    if (!post) {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    }
    return post;
  };

  // Function to upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Bcommy");
    formData.append("cloud_name", "dardcocuk");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dardcocuk/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  const addPost = async (postData) => {
    try {
      loading.value = true;

      // Nếu có file ảnh thì upload trước
      let imageUrl = "";
      if (postData.thumbnail instanceof File) {
        imageUrl = await uploadImageToCloudinary(postData.thumbnail);
      } else {
        imageUrl = postData.thumbnail; // có thể là URL đã có sẵn
      }

      const newPost = {
        title: postData.title,
        content: postData.content,
        excerpt: postData.excerpt,
        thumbnail: imageUrl,
        createdAt: new Date().toISOString(),
      };

      const res = await axios.post(API_URL, newPost);
      posts.value.unshift(res.data);
      return res.data;
    } catch (error) {
      console.error("Error adding post:", error);
    } finally {
      loading.value = false;
    }
  };

  const updatePost = async (id, updatedPost) => {
    await axios.put(`${API_URL}/${id}`, updatedPost);
    const index = posts.value.findIndex((p) => p.id === Number(id));
    if (index !== -1) posts[index] = updatePost;
  };

  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    posts.value = posts.value.filter((p) => p.id !== id);
  };

  return {
    posts,
    loading,
    addPost,
    updatePost,
    deletePost,
    fetchPosts,
    getPostById,
    totalPosts
  };
}
