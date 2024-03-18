export interface Post {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export const fetchPost = async (postId: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${postId}`
    );
    const post = await response.json();

    return post;
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : error);
  }
};

export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data: Post[] = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
