import axios from "axios";

export interface Post {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export const fetchPost = async (postId: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${postId}`
    );
    const post = await response.data;

    return post;
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : error);
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
