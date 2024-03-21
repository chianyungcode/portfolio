import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../actions/posts";
import { useUser } from "@clerk/clerk-react";

export const Route = createFileRoute("/posts")({
  loader: fetchPosts,
  component: PostsComponent,
});
function PostsComponent() {
  const posts = Route.useLoaderData();
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <div>You not allowed to visit this page</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-8 py-4 my-8 rounded-2xl border border-gray-100 space-y-2 mt-24">
      <h1 className="text-3xl font-bold ">Posts List</h1>
      <h2>This is a post that from {user.fullName}</h2>
      <ul className="list-disc">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link
              to="/posts/$postId"
              params={{ postId: post.id }}
              activeProps={{ className: "text-black font-bold" }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default PostsComponent;
