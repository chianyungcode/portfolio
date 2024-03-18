import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../../posts";

export const Route = createFileRoute("/post")({
  loader: fetchPosts,
  component: PostComponent,
});
function PostComponent() {
  const posts = Route.useLoaderData();

  return (
    <div className="max-w-3xl mx-auto px-8 py-4 my-8 rounded-2xl border border-gray-100 space-y-2 ">
      <h1 className="text-3xl font-bold ">Posts List</h1>
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
