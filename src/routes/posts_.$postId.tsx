import { fetchPost } from "../posts";
import {
  ErrorComponent,
  ErrorComponentProps,
  Link,
  Outlet,
  createFileRoute,
} from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params: { postId } }) => fetchPost(postId),
  errorComponent: PostErrorComponent,
  notFoundComponent: () => {
    return <p>Post not Found</p>;
  },
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="space-y-2 text-black">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
      <Link
        to="/posts/$postId/deep"
        params={{
          postId: post.id,
        }}
        activeProps={{ className: "text-black font-bold" }}
        className="block py-1 text-blue-800 hover:text-blue-600"
      >
        Lihat lebih lanjut
      </Link>
      <Outlet />
    </div>
  );
}
